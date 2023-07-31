import React, { FC, ReactNode, MouseEvent } from 'react';
import { FormContainer, FormContent } from './FormModal.styled';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    heading: string;
  }


const FormModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const handleModalClick = (e: MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement;
      if (target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
  
    return (
      <FormContainer isOpen={isOpen} className="modal-overlay" onClick={handleModalClick}>
        <FormContent>{children}</FormContent>
      </FormContainer>
    );
  };

export default FormModal;