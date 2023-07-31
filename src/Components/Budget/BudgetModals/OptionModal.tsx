import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  ThreeDot,
  Modal,
  Edit,
  EditIcon,
  DeleteIcon,
} from "./optionmodal-style";

import AddDailyNeeds from "./AddDailyNeeds";
import PlannedPayment from "./PlannedPayment";

interface OptionalProps {
  type?: string;
}
const OptionModal: React.FC<OptionalProps> = ({ type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [ModalOpen, setModalOpen] = useState(false);
 
  const handleButtonClick = () => {
    setModalOpen(true);
    setIsOpen(false);
  };
  const handleCloseModal = () => {
    setModalOpen(true);
  };

  return (
    <ThreeDot>
      <BsThreeDotsVertical onClick={toggleModal} />
      {isOpen && (
        <>
          {type ? (
            <div>
              <PlannedPayment isOpen={ModalOpen} onClose={handleCloseModal} />
            </div>
          ) : (
            <div>
              <AddDailyNeeds
                isOpen={ModalOpen}
                onClose={handleCloseModal}
              />
            </div>
          )}
          <Modal ref={modalRef}>
            <Edit>
              <EditIcon onClick={handleButtonClick} />
            </Edit>
            <Edit>
              <DeleteIcon />
            </Edit>
          </Modal>
        </>
      )}
    </ThreeDot>
  );
};
export default OptionModal;
