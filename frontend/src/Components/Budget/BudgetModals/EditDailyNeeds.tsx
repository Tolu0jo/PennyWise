import React from "react";
import { Modal, Header, SubHeading, Input, BigInput } from "./Modal-styles";
import ModalFrame from "./ModalFrame";
import Button from "../../Button/button";

interface DailyNeedProps {
  isOpen: boolean;
  onClose: () => void;
  heading?: string;
}
const EditDailyNeeds: React.FC<DailyNeedProps> = ({
  isOpen,
  onClose,
  heading,
}) => {
  return (
    <ModalFrame isOpen={isOpen} onClose={onClose}>
      <Modal>
        <Header>{heading ? heading : "Edit"} Daily Needs</Header>
        <SubHeading>Category</SubHeading>
        <Input placeholder="Enter category name" />
        <SubHeading>Description</SubHeading>
        <BigInput placeholder="Type brief description (optional)" />
        <SubHeading>Set Limit</SubHeading>
        <Input placeholder="Enter Amount" />
        <Button
          width="100%"
          height="2.75rem"
          fontSize="1rem"
          backgroundColor="#2D6A4F"
          margin="1.5rem 0 0 0"
          color="white"
          onClick={() => !isOpen}
          border="solid 1px green"
          text={heading !== "Add" ? "Save" : "Add"}
        />
      </Modal>
    </ModalFrame>
  );
};

export default EditDailyNeeds;
