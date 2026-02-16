import styled from "@emotion/styled";
import type { TestItem, Attemp } from "../../types/testing";
import { DateIcon, TimeIcon } from "../../icons/icons";

const Card = styled.article`
  border: 1px solid #dde2e4;
  border-radius: 12px;
  padding: 34px 15px 15px 22px;
  position: relative;
`;

const TestContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TestTitle = styled.h3`
  font-size: 22px;
`;

const TestDescription = styled.p`
  font-size: 14px;
  line-height: 1.7;
`;

const TestList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const TestListTag = styled.li`
  border: 1px solid rgba(14, 115, 246, 0.3);
  padding: 7px 12px;
  color: #0e73f6;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 550;
`;

const TestListDate = styled.li`
  padding: 7px 12px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #ffa528;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TestListTime = styled.li`
  padding: 7px 12px;
  color: #0e73f6;
  background-color: #f4f9ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ContentScore = styled.div`
  padding: 29px 10px 46px;
  background-color: #e8f5ff;
  border-radius: 0 0 4px 4px;
  position: absolute;
  top: 0;
  right: 35px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%);
`;

const Score = styled.span`
  color: #0e73f6;
  font-weight: 600;
  font-size: 26.4px;
`;

const MaxScore = styled.span`
  color: rgba(14, 115, 246, 0.3);
  font-weight: 600;
  font-size: 26.4px;
`;

type TestCardProp = {
  test: TestItem;
  lastAttemps: Attemp;
};

export function TestCard(props: TestCardProp) {
  const { test, lastAttemps } = props;

  function formatSecFromMin(seconds: number | null): string | null {
    if (!seconds) return null;

    const minutes = Math.round(seconds / 60);

    let wordForm: string;
    const lastDigit = minutes % 10;
    const lastTwoDigits = minutes % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      wordForm = "минут";
    } else if (lastDigit === 1) {
      wordForm = "минута";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
      wordForm = "минуты";
    } else {
      wordForm = "минут";
    }

    return `${minutes} ${wordForm}`;
  }

  function formatDateISO(date?: string | null): string | null {
    if (!date) return null;
    const d = new Date(date);
    return d.toLocaleDateString("ru-RU");
  }

  const isGreaded = lastAttemps.status === "graded";
  const scoreText = isGreaded ? lastAttemps.score / 10 : null;
  const deadline = formatDateISO(test.deadlineISO);
  const duration = formatSecFromMin(test.durationSec);
  return (
    <Card>
      <TestContent>
        <TestTitle>{test.title}</TestTitle>
        <TestDescription>{test.shortDescription}</TestDescription>
        <TestList>
          {test.tags.map((t, i) => (
            <TestListTag key={i}>{t}</TestListTag>
          ))}
        </TestList>
        <TestList>
          {!!deadline && (
            <TestListDate>
              <DateIcon />
              {deadline}
            </TestListDate>
          )}
          {!!duration && (
            <TestListTime>
              <TimeIcon />
              {duration}
            </TestListTime>
          )}
        </TestList>
        <div>
          <button>Пройти</button>
          <button>Пройти заново</button>
          <button>Выполнено</button>
        </div>
        {isGreaded && (
          <ContentScore>
            <Score>{scoreText}</Score>
            <MaxScore>/10</MaxScore>
          </ContentScore>
        )}
      </TestContent>
    </Card>
  );
}
