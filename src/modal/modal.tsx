import styled from "@emotion/styled";
import { CloseModal } from "../icons/icons";

const BGModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backgroud-color: #f5f5f54d;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  inset: 0;
  z-index: 10;
  backdrop-filter: blur(5px);
  border: 1px solid #dde2e4;
`;
const Dialog = styled.div`
  padding: 24px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 8px;
  border: 1px solid #dde2e4;
  max-width: 440px;
  width: 100%;
`;
const Head = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;
const ModalButtonClose = styled.button`
  position: absolute;
  right: -10px;
  top: -15px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;
const ModalCloseIcon = styled(CloseModal)``;
const ModalTitle = styled.h2`
  font-size: 24px;
  line-height: 1.33;
  font-weight: 600;
`;
const Main = styled.main``;
const ButtonLine = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  flex: 1 1 calc(50% - 10px);
  text-align: center;
  background-color: #dedede;
  justify-content: center;
  cursor: pointer;
`;

type ModalProps = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal(props: ModalProps) {
  const { open, title, children, onClose } = props;

  if (!open) return null;


  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") props.onClose();
  });

  return (
    <BGModal onClick={() => onClose()}>
      <Dialog onClick={(event) => event.stopPropagation()}>
        <Head>
          <ModalTitle>{title}</ModalTitle>
          <ModalButtonClose onClick={() => onClose()}>
            <ModalCloseIcon />
          </ModalButtonClose>
        </Head>
        <Main>{children}</Main>
        <ButtonLine>
          <Button onClick={() => onClose()}>Закрыть</Button>
          <Button>Подтвердить</Button>
        </ButtonLine>
      </Dialog>
    </BGModal>
  );
}
