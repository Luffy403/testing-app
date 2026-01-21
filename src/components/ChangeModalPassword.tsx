import styled from "@emotion/styled";
import { Modal } from "../modal/modal";

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
`;

type ChangeModalPasswordProps = {
  open: boolean;
  onClose: () => void;
};

export function ChangeModalPassword(props: ChangeModalPasswordProps) {
  const { open, onClose } = props;
  return (
    <Modal title="Сменить пароль" open={open} onClose={() => onClose()}>
      <form>
        <InputContainer>
          <Label htmlFor="new-pass">Новый пароль</Label>
          <Input type="password" id="new-pass" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="rep-pass">Подтвердите пароль</Label>
          <Input type="password" id="rep-pass" />
        </InputContainer>
      </form>
    </Modal>
  );
}
