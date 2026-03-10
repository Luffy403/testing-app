// import styled from "@emotion/styled";
import type { Questions } from "../../types/testing";

// const TextAnswer = styled.input`
//   width: 100%;
//   padding: 8px 10px;
//   border: 1px solid #ddd;
//   border-radius: 6px;
//   outline: none;
//   font-size: 16px;
//   box-sizing: border-box;

//   &:focus {
//     border-color: #0e8e86;
//     box-shadow: 0 0 0 3px rgba(14, 142, 134, 0.12);
//   }
// `;

type QuestionBlockProps = {
  question: Questions;
  value: string | string[] | null;
  onChange: (id: number, value: string | string[] | null) => void;
};

export function QuestionsBlock(props: QuestionBlockProps) {
  const { question, onChange, value } = props;
  return (
    <fieldset key={question.id}>
      <legend>{question.text}</legend>
      {question.type === "multiple" && (
        <ul>
          {(question.options ?? []).map((opt, indx) => {
            const arrCheckbox = Array.isArray(value) ? value : [];
            const checked = arrCheckbox.includes(opt);
            return (
              <li key={indx}>
                <label>
                  <input
                    name={`questions-${question.id}`}
                    type="checkbox"
                    onChange={() => {
                      const data = checked
                        ? arrCheckbox.filter((val) => val !== opt)
                        : [...arrCheckbox, opt];
                      onChange(question.id, data);
                    }}
                    checked={checked}
                  />
                  <span>{opt}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
      {question.type === "single" && (
        <ul>
          {(question.options ?? []).map((opt, indx) => {
            return (
              <li key={indx}>
                <label>
                  <input
                    name={`questions-${question.id}`}
                    type="radio"
                    aria-label={`questions-${question.id}`}
                    onChange={() => onChange(question.id, opt)}
                    checked={value === opt}
                  />
                  <span>{opt}</span>
                </label>
              </li>
            );
          })}
        </ul>
      )}
      {question.type === "text" && (
        <label>
          <input
            name={`questions-${question.id}`}
            type="text"
            aria-label={`questions-${question.id}`}
            placeholder="Введите свой ответ"
            onChange={(e) => onChange(question.id, e.target.value)}
            value={typeof value === "string" ? value : ""}
          />
        </label>
      )}
    </fieldset>
  );
}
