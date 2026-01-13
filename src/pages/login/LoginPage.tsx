import styled from "@emotion/styled";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = styled.form`
  max-width: 440px;
  width: 100%;
  border: 1px solid #dde2e4;
  padding: 24px;
  border-radius: 8px;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 94vh;
`;

const LoginTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
`;

const LoginInputsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`;

const LoginInput = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  width: 100%;
  background-color: #fff;

  padding: 8px 20px;
`;

const InputLabel = styled.label`
  line-height: 24px;
  font-size: 14px;
`;

const LoginButton = styled.button`
  background-color: #4094f7;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  color: #fff;
  width: 100%;
  margin-top: 24px;
  line-height: 24px;
`;

const CheckboxLine = styled.label`
  display: flex;
  align-items: center;
`

const Checkbox = styled.input`
  color: #0E73F6;
  margin-right: 10px;
  width: 16px;
  height: 16px;
`

const CheckboxText = styled.span`
  line-height: 20px;
  font-size: 14px;
`;

export function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/student");
  };

  return (
    <LoginWrapper>
      <LoginForm onSubmit={(e) => handleSubmit(e)}>
        <LoginTitle>Добро пожаловать!</LoginTitle>
        <LoginInputsColumn>
          <InputLabel>
            Логин
            <LoginInput type="text" />
          </InputLabel>
          <InputLabel>
            Пароль
            <LoginInput type="password" />
          </InputLabel>
        </LoginInputsColumn>
        <CheckboxLine>
          <Checkbox type="checkbox" />
          <CheckboxText>Запомнить меня</CheckboxText>
        </CheckboxLine>
        <LoginButton type="submit">Войти</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
}
