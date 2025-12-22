import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";

// Стилизованный компонент для текстового поля
const TextAnswer = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #0e8e86;
    box-shadow: 0 0 0 3px rgba(14, 142, 134, 0.12);
  }
`;

export function StudentTestPage() {
  const [questions, setQuestions] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const API_URL = "/data/questions.json";
    fetch(API_URL)
      .then((res) => res.json())
      .then((todos) => setQuestions(todos));
  }, []);

  const filtered = questions.filter((q) => q.testId === Number(id));
  console.log(filtered, questions);

  return (
    <div>
      <ul>
        {filtered.map((q) => (
          <li key={q.id}>
            <h3>{q.text}</h3>
            {q.type === "text" ? (
              <TextAnswer
                type="text"
                placeholder="Ваш ответ"
                aria-label={`Ответ на вопрос ${q.id}`}
              />
            ) : (
              <ul>
                {q.options.map((o, indx) => (
                  <li key={indx}>
                    <label>
                      <input type="checkbox" />
                      <span>{o}</span>
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}