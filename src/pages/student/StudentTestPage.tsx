import styled from "@emotion/styled";
import { TestCard } from "../../components/tests/TestCard";
import { useEffect, useMemo, useState } from "react";
import { Loader } from "../../components/ui/Loader";
import { type TestItem, type Attemp } from "../../types/testing";
import { StudentHeader } from "../../components/student/StudentHeader";

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export function StudentTestPage() {
  const [tests, setTests] = useState<TestItem[]>([]);
  const [attemps, setAttemps] = useState<Attemp[]>([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const API_TESTS = "/data/tests.json";
    const API_ATTEMPS = "/data/attemps.json";
    Promise.all([fetch(API_TESTS), fetch(API_ATTEMPS)])
      .then(async ([res1, res2]) => {
        if (!res1.ok) throw new Error(`Ой,${res1}`);
        if (!res2.ok) throw new Error(`Ой,${res2}`);
        const t = await res1.json();
        const a = await res2.json();

        setTests(t);
        setAttemps(a);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const lastAttempByTest = useMemo(() => {
    const byTest = new Map<number, Attemp>();
    const mine = attemps.filter((a) => a.userId === 1);
    for (const a of mine) {
      byTest.set(a.testId, a);
    }
    return byTest;
  }, [attemps]);

  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;
  if (loading) return <Loader />;
  return (
    <>
      <StudentHeader title="Тесты" />
      <Cards>
        {tests.map((t, i) => (
          <TestCard test={t} key={i} lastAttemps={lastAttempByTest.get(t.id)} />
        ))}
      </Cards>
    </>
  );
}
