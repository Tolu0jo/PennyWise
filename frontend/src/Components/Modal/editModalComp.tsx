import React, { ReactNode } from 'react';
import styled from 'styled-components'

 const EditModalOverlay = styled.div`
   position: fixed;
   width: 74px;
   height: 50px;
   background-color: white;
   margin: 0px 0px 0px 20px;
   box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
   border-radius: 8px;
   z-index: 999;
   padding: 10px;
//    cursor: pointer;
 `;

const EditModalContent = styled.div``;

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const EditModal: React.FC<EditModalProps> = ({isOpen, onClose, children}) => {
    if(!isOpen) return null;
    return (
      <EditModalOverlay onClick={onClose}>
        <EditModalContent
          onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}>
          {children}
        </EditModalContent>
      </EditModalOverlay>
    );

};

export default EditModal