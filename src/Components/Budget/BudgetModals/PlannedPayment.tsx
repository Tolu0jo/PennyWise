import React from "react";
import { Modal, Header, SubHeading, Input, BigInput } from "./Modal-styles";
import ModalFrame from "./ModalFrame";
import Button from "../../Button/button";

const PlannedPayment = ({ isOpen, onClose, heading }: any) => {
  return (
    <ModalFrame isOpen={isOpen} onClose={onClose}>
      <Modal>
        <Header>{heading ? heading : "Edit"} Planned Payments</Header>
        <SubHeading>Category</SubHeading>
        <Input placeholder="Enter category name" />
        <SubHeading>Amount</SubHeading>
        <Input placeholder="Enter Amount" />
        <SubHeading>Frequency </SubHeading>
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

export default PlannedPayment;
