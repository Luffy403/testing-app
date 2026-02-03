import styled from "@emotion/styled";
import { Modal } from "../modal/modal";
import { ShowPassword } from "../icons/icons";
import { useState } from "react";

const InputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  line-height: 1.71;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #d1d5db;
  position: relative;
`;

const InputLine = styled.div`
  position: relative;
`;

const InputIcon = styled(ShowPassword)`
  position: absolute;
  z-index: 5;
  top: 7px;
  right: 20px;
  bottom: 0;
  cursor: pointer;
`;

const Errors = styled.pre`
  color: red;
  white-space: pre-wrap;
`;

const Button = styled.button<{ tone?: "primary" | "dis" }>`
  padding: 10px 20px;
  flex: 1 1 calc(50% - 10px);
  text-align: center;
  background-color: ${({ tone }) => (tone === "primary" ? "#4094F726" : "grey")};
  color: ${({ tone }) => (tone === "primary" ? "#ffff" : "grey")};
  border: 1px solid ${({ tone }) => (tone === "primary" ? "#ffff" : "grey")}
  cursor: pointer;

  &:disabled{
    opacity: 0.6;
    cursor: not-allowed;
  }

`;

type ChangeModalPasswordProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};


export function ChangeModalPassword(props: ChangeModalPasswordProps) {
  const { open, onClose, onSuccess } = props;
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");

  const validatePassword = (pw: string) => {
    const errors: string[] = [];
    if (pw.length < 8) errors.push("Не менее 8 символов");
    if (!/[a-zа-яё]/.test(pw))
      errors.push("Хотя бы одна буква в нижнем регистре");
    if (!/[A-ZА-ЯЁ]/.test(pw)) {
      errors.push("Хотя бы одна буква в верхнем регистре");
    }
    if (!/[0-9]/.test(pw)) {
      errors.push("Хотя бы одна цифра");
    }
    if (!/[!@#$%^&*?]/.test(pw)) {
      errors.push("Хотя бы один спецсимвол (!@#$%^&*?)");
    }
    if (/\s/.test(pw)) errors.push("Без пробелов");
    if (pw === USER_PASS)
      errors.push("Новый пароль не должен повторять старый");

    return errors;
  };

  const USER_PASS = "Password123$";
  const errors = validatePassword(pw1);
  const checkErr = pw1 && pw2 && pw1 !== pw2 ? "Пароли не совпадают" : null;
  const formValid =
    pw1 !== "" && pw2 !== "" && errors.length === 0 && !checkErr;

  async function sendPassword(newPw: string) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (newPw.includes("Password123$")) {
          reject(new Error("Упс, пароль содержит старый пароль"));
        } else resolve();
      }, 1000);
    });
  }

  const onSubmit = async () => { // Добавлено async здесь
    if (!formValid) return;
    try {
      await sendPassword(pw1);
      console.log("сюда"); // Переместили сюда, чтобы логировать только при успехе
      setPw1("");
      setPw2("");
      onClose();
      onSuccess();
    } catch (error) {
      console.error("error:", error);
    }
  };

  function blockButtons() {
    return (
      <>
        <Button onClick={() => onClose()}>Закрыть</Button>
        <Button
          tone={"primary"}
          disabled={!formValid}
          onClick={() => onSubmit()}
        >
          Подтвердить
        </Button>
      </>
    );
  }

  return (
    <Modal
      title="Сменить пароль"
      open={open}
      onClose={() => onClose()}
      footer={blockButtons()}
    >
      <form>
        <InputContainer>
          <Label htmlFor="new-pass">Новый пароль</Label>
          <InputLine>
            <Input
              type="password"
              onChange={(e) => setPw1(e.target.value)}
              id="new-pass"
              value={pw1}
            />
            <InputIcon />
          </InputLine>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="rep-pass">Подтвердите пароль</Label>
          <InputLine>
            <Input
              type="password"
              onChange={(e) => setPw2(e.target.value)}
              id="rep-pass"
              value={pw2}
            />
            <InputIcon />
          </InputLine>
        </InputContainer>
      </form>
      <Errors>{errors.join("\n")}</Errors>
      <Errors>{checkErr}</Errors>
    </Modal>
  );
}