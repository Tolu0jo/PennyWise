import React, { useState } from "react";
import Modal from "../modalComp";
import Button from "../../Button/button";
import {
  AddSavingsBody,
  ModelHeader,
  ModelForm,
  ModelFieldSet,
  ModelLabel,
    ModelInput,
  ModelSelect
} from "./styled";
import { useAuth } from "../../../context/authContext";

interface AddSavingsProps {
  isOpen: boolean;
  onClose: () => void;
  handlePageReload: () => void;
}

const AddSavings: React.FC<AddSavingsProps> = ({ isOpen, onClose,handlePageReload }) => {
  const { addSavings } = useAuth()
  
  const [selectedOption,setSelectedOption] = useState("")
  const [form, setForm] = useState({
    savingPurpose: "",
    frequency: selectedOption,
    targetAmount: "",
    targetDate:""
  })
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    setForm((prev)=>({...prev,frequency: selectedOption}))
  }
  
  const handleChange = (e:any) => {
    const { name, value } = e.target
    setForm((prev)=>({...prev,[name]:value}))
  }
  const handleSubmit = async(e:any) => {
    e.preventDefault()
   await addSavings(form)
    handlePageReload()
    onClose()

}
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AddSavingsBody>
        <ModelForm onSubmit={handleSubmit}>
          <ModelHeader>Add Savings Target</ModelHeader>
          <ModelFieldSet>
            <ModelLabel htmlFor="savingPurpose">Saving purpose</ModelLabel>
            <ModelInput
              type="text"
              name="savingPurpose"
              placeholder="Enter Narration"
              onChange={handleChange}
            />
            <ModelLabel htmlFor="frequency">Frequency</ModelLabel>
            <ModelSelect
              name="frequency"
              id=""
              onChange={handleSelectChange}
              value={selectedOption}
            >
              <option disabled selected value="" style={{ color: "#BDBDBD" }}>
                Select
              </option>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </ModelSelect>
            <ModelLabel htmlFor="target-amount">Target Amount</ModelLabel>
            <ModelInput
              type="number"
              name="targetAmount"
              placeholder="Type Amount"
              onChange={handleChange}
            />
            <ModelLabel htmlFor="target-date">Target Date</ModelLabel>
            <ModelInput
              type="date"
              name="targetDate"
              placeholder="Enter Narration"
              onChange={handleChange}
            />
            <Button
              margin="25px 0 5px 0"
              width="104%"
              height="2.75rem"
              text="Add"
              backgroundColor="#2D6A4F"
              border="1px solid #1B4332"
              fontSize="14px"
            />
          </ModelFieldSet>
        </ModelForm>
      </AddSavingsBody>
    </Modal>
  );
};

export default AddSavings;
