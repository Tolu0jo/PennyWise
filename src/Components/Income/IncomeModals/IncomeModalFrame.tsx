import { FC, ReactNode, MouseEvent } from 'react';
import { ModalLayout, ModalContent } from "./AddModal.styled";



type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const IncomeModalFrame: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalStyles = {
    display: isOpen ? 'flex' : 'none',
  };
  const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).classList.contains('modal-overlay')) {
      onClose();
    }
  };
  return (
    <ModalLayout className='modal-overlay' style={modalStyles} onClick={handleModalClick}>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalLayout>
  );
};

export default IncomeModalFrame;
