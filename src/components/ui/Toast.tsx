import styled from "@emotion/styled";
import { CloseModal, DoneIcon } from "../../icons/icons";
import { useEffect } from "react";

const Wrap = styled.div`
  position: fixed;
  bottom: 35px;
  right: 35px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  background-color: #d7edff;
  border-radius: 15px;
  color: #0e73f6;
  padding: 22px 16px;
  max-width: 371px;
  width: 100%;
`;

const Close = styled.button`
  color: #0e73f6;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 1px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
`;

const Message = styled.p`
    color: #0e73f6;
    font-size: 14px;
    font-weight: 600;

`;


type ToastProps = {
  message: string;
  open: boolean;
  onClose: () => void;
  duration?: number;
};

export function Toast(props: ToastProps) {
  const { message, open, onClose, duration = 3000 } = props;

  useEffect(()=> {
    const id = setTimeout(()=> {
        onClose();
    }, duration)
    return () => clearTimeout(id);
  }, [open, onClose, duration]);


  if(!open) return null;
  return (
    <Wrap>
      <Content>
        <DoneIcon />
        <Message>{message}</Message>
      </Content>
      <Close onClick={onClose}>
        <CloseModal />
      </Close>
    </Wrap>
  );
}
