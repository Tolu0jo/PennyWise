import React, { useState } from "react";
import {
  Modal,
  Header,
  SubHeading,
  Input,
} from "./AddModal.styled";
import Button from "../../Button/button";
import IncomeModalFrame from "./IncomeModalFrame";
import { useAuth } from "../../../context/authContext";
interface CashIncomeProps {
  isOpen: boolean;
  onClose: () => void;
  onPageReload: () => void;
}

const AddCashIncome: React.FC<CashIncomeProps> = ({ isOpen, onClose, onPageReload  }) => {
  const{createCashIncome}= useAuth()
  const [form, setForm] = useState({
    narration: "",
    amount: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

  };
 
  const handleSubmit= async(e:any)=>{
    e.preventDefault();
  await createCashIncome(form)
    setForm({
      narration: "",
      amount: "",
    });
    onClose()
    onPageReload();
   
  }
  return (
    <IncomeModalFrame isOpen={isOpen} onClose={onClose}>
      <Modal>
        <Header>Add Cash Income</Header>
        <form  onSubmit={handleSubmit}>
        <SubHeading>Narration</SubHeading>
        <Input
          placeholder="Enter narration"
          type="text"
          value={form.narration}
          name="narration"
          onChange={handleChange}
        />
        <SubHeading>Amount</SubHeading>
        <Input
          placeholder="Type amount"
          name="amount"
          type="text"
           value={form.amount}
          onChange={handleChange}
        />
        <Button
          type="submit"
          width="100%"
          height="2.75rem"
          fontSize="1rem"
          backgroundColor="#2D6A4F"
          margin="1.5rem 0 0 0"
          color="white"
          border="solid 1px green"
          text="Add"
        />
        </form>
      </Modal>
    </IncomeModalFrame>
  );
};

export default AddCashIncome;
