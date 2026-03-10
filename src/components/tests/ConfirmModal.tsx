import styled from "@emotion/styled";
import { Modal } from "../../modal/modal";

const ButtonClose = styled.button`
  padding: 10px;
  flex: 1 1 calc(50% - 10px);
  cursor: pointer;
  border-radius: 6px;
  background-color: transparent;
  color: black;
  border: 1px solid grey;
`;

const ButtonDone = styled.button`
  padding: 10px;
  flex: 1 1 calc(50% - 10px);
  cursor: pointer;
  border-radius: 6px;
  background-color: #0077ff;
  color: #ffffff;
  border: 1px solid #0077ff;
`;

type ConfirmModalProps = {
  open: boolean;
  labelClose: string;
  labelDone: string;
  title: string;
  onClose: () => void;
  onConfirm: () => void;
};

export function ConfirmModal(props: ConfirmModalProps) {
  const { open, labelClose, labelDone, title, onClose, onConfirm } = props;
  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
      footer={
        <>
          <ButtonClose onClick={()=>onClose()}>
            {labelClose}
          </ButtonClose>
          <ButtonDone onClick={()=>onConfirm()}>
            {labelDone}
          </ButtonDone>
        </>
      }
    />
  );
}
