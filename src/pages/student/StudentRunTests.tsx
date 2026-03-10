import { useLocation, useParams, useNavigate } from "react-router-dom";
import { QuestionsBlock } from "../../components/tests/QuestionsBlock";
import { Timer } from "../../components/tests/Timer";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";
import type { Questions, TestItem } from "../../types/testing";
import { Loader } from "../../components/ui/Loader";
import { StudentHeader } from "../../components/student/StudentHeader";
import { ConfirmModal } from "../../components/tests/ConfirmModal";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 10px;
`;

type AnswerValue = string[] | null | string;
type AnswerType = "multiple" | "single" | "text";
type AnswerState = {
  type: AnswerType;
  value: AnswerValue;
};
type AnswersMap = Record<number, AnswerState>;

export function StudentRunTests() {
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [testMeta, setTestMeta] = useState<TestItem | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const API_URL = "/data/questions.json";
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP${res}`);
        return res.json();
      })
      .then((todos) => setQuestions(todos))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const API_URL = "/data/tests.json";
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP${res}`);
        return res.json();
      })
      .then((tests: TestItem[]) => {
        const found = tests.find((t) => t.id === Number(id));
        setTestMeta(found);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (questions.length === 0) return;
    setAnswers((prevAnsw) => {
      if (Object.keys(prevAnsw).length > 0) return prevAnsw;
      const initAnswer: AnswersMap = {};
      for (const quest of questions) {
        initAnswer[quest.id] = {
          type: quest.type,
          value: quest.type === "multiple" ? [] : null,
        };
      }
      return initAnswer;
    });
  }, [questions]);

  const filtered = questions.filter((q) => q.testId === testMeta?.id);

  const durationSec =
    (location.state as { durationSec?: number } | null)?.durationSec ?? 600;

  function handleAnswerChange(id: number, value: string | string[]) {
    setAnswers((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        value,
      },
    }));
  }

  const answeredCount = useMemo(() => {
    return Object.values(answers).filter((answ) => {
      if (answ.type === "single") return answ.value !== null;
      if (answ.type === "multiple")
        return Array.isArray(answ.value) && answ.value.length > 0;
      if (answ.type === "text")
        return typeof answ.value === "string" && answ.value.trim() !== "";
    }).length;
  }, [answers]);

  const totalCount = filtered.length;
  const allAnswered = totalCount === answeredCount;
  // const title = allAnswered ? "все выполнено" : "не все выполнено";
   function handleSubmit() {
    const resultAnsw = {
      
    }
  }
  function removeTest(){
    navigate(-1)
  }
  function handleClick(){
    setOpenModal(true)
  }
  function onChange() {
    setOpenModal(prev => !prev);
  }

  if (Number.isNaN(testMeta?.id))
    return (
      <div>
        <StudentHeader title="Error" />
        <Grid>
          <h3>Неопределённый ID теста</h3>
        </Grid>
      </div>
    );
  if (filtered.length === 0)
    return (
      <div>
        <StudentHeader title="Error" />
        <Grid>
          <h3>Список вопросов пуст</h3>
        </Grid>
      </div>
    );
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;
  if (loading) return <Loader />;
  
  return (
    <div>
      <StudentHeader title="Вопросы теста" />
      <Grid>
        <div>
          {filtered.map((q) => (
            <QuestionsBlock
              key={q.id}
              question={q}
              onChange={handleAnswerChange}
              value={answers[q.id]?.value || null}
            />
          ))}
        </div>
        <Timer durationSec={durationSec} onFinish={() => alert("ура")} />
        <button onClick={() => handleClick()}>Отправить</button>
      </Grid>
      <ConfirmModal
        title="Вы точно хотите закончить тест?"
        open={openModal}
        onClose={() => onChange()}
        labelClose="Нет"
        labelDone="Да"
        onConfirm={() => removeTest()}
      />
    </div>
  );
}
