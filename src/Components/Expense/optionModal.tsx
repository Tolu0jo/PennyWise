import React, { useEffect, useState } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import styled from "styled-components";
import EditExpenseModal from "./editModal";

const ModalContainer = styled.div<{show: boolean}>`
    position: absolute;
    top: 0px;
    width: 40px;
    padding: 0.5rem;
    background-color: white;
    border: 1px solid gray;
    border-radius: 8px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0.3);
    display: ${({ show }) => (show ? 'block' : 'none')};

`;
const IconModal = styled.div`
    display: flex;
    
    margin-bottom: 5px;
    cursor: pointer;
    letter-spacing: 0.15px;
    svg{
        margin-right: 5px;
    }
`;

interface ModalProps {
    show: boolean;
    onClose: () => void;
}

const OptionModal: React.FC<ModalProps> = ({show, onClose}) => {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (show && event.target instanceof Element && !event.target.closest("#modal-container")) {
                onClose();
            };
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [show, onClose]);

    const [isEditExpenseModalOpen, setIsEditExpenseModalOpen] = useState(false);

    const handleEditExpenseClick = () => {
        setIsEditExpenseModalOpen(true);
    };
    
    const closeEditExpenseModal = () => {
        setIsEditExpenseModalOpen(false);
    };

    return (
        <ModalContainer id="modal-conatiner" show={show}>
            <IconModal onClick={handleEditExpenseClick}>
                <BsPencilSquare color="#081c15"/>
            </IconModal>
            <IconModal>
                <BsTrash color="#f04438"/>
            </IconModal>
            {isEditExpenseModalOpen && (
        <EditExpenseModal isOpen={isEditExpenseModalOpen} onClose={closeEditExpenseModal} />
      )}
        </ModalContainer>
    );
};

export default OptionModal;