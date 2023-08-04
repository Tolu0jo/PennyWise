import React, { useEffect, useState } from "react";
import { Modal, Header, SubHeading, Input } from "./AddModal.styled";
import Button from "../../Button/button";
import IncomeModalFrame from "./IncomeModalFrame";
import { useAuth } from "../../../context/authContext";
interface CashIncomeProps {
  isOpen: boolean;
  onClose: () => void;
  onPageReload: () => void;
  income: any;
}

const EditCashIncome: React.FC<CashIncomeProps> = ({
  isOpen,
  onClose,
  onPageReload,
  income,
}) => {
  const { updateCashIncome } = useAuth();
  const [form, setForm] = useState({
    id: "",
    narration: "",
    amount: "",
  });
  useEffect(() => {
    setForm({
      id: income?.id || "",
      narration: income?.narration || "",
      amount: income?.amount || "",
    });
  }, [income]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await updateCashIncome(form);
    setForm({
      id: income.id,
      narration: "",
      amount: "",
    });
    onClose();
    onPageReload();
  };
  return (
    <IncomeModalFrame isOpen={isOpen} onClose={onClose}>
      <Modal>
        <Header>Edit Cash Income</Header>
        <form onSubmit={handleSubmit}>
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
            text="Edit"
          />
        </form>
      </Modal>
    </IncomeModalFrame>
  );
};

export default EditCashIncome;
