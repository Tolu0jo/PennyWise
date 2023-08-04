import React, { useEffect, useState } from "react";
import Modal from "../modalComp";
import Button from "../../Button/button";
import {EditSavingsBody, EditModelForm, EditModelHeader, EditModelFieldSet, EditModelLabel, EditModelInput, EditModelSelect } from './editStyles'
import { useAuth } from "../../../context/authContext";

interface EditSavingsProps{
    isOpen: boolean;
  onClose: () => void;
  saving: any;
  pageReload:()=>void;
}

const EditSavings: React.FC<EditSavingsProps> = ({ isOpen, onClose, saving,pageReload}) => {
  const { editSavings } = useAuth()
  const [selectedOption, setSelectedOption] = useState(saving.frequency);

  const [form, setForm] = useState({
    id:"",
    savingPurpose: "",
    frequency:  "",
    targetAmount: "",
    targetDate:  "",
  })

  useEffect(() => {
    setForm({
      id: saving.id,
      savingPurpose: saving?.savingPurpose,
      frequency: selectedOption,
      targetAmount: saving?.targetAmount,
      targetDate: saving?.targetDate,
    });
  },[saving])
   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     const selectedOption = e.target.value;
     setSelectedOption(selectedOption);
     setForm((prev) => ({ ...prev, frequency: selectedOption }));
   };
   const handleChange = (e: any) => {
     const { name, value } = e.target;
     setForm((prev) => ({ ...prev, [name]: value }));
   };
   const handleSubmit = async (e: any) => {
     e.preventDefault();
    await editSavings(form);
     pageReload()
     onClose()
   };
  
  
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <EditSavingsBody>
          <EditModelForm action="#"onSubmit={handleSubmit}>
            <EditModelHeader>Edit Savings Target</EditModelHeader>
            <EditModelFieldSet>
              <EditModelLabel htmlFor="saving purpose">
                Saving purpose
              </EditModelLabel>
              <EditModelInput
                type="text"
                placeholder="Enter Narration"
                value={form.savingPurpose}
                onChange={handleChange}
              />
              <EditModelLabel htmlFor="frequency">Frequency</EditModelLabel>
              <EditModelSelect
                name="frequency"
                id=""
                value={form.frequency}
                onChange={handleSelectChange}
              >
                <option value="Daily">Daily</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </EditModelSelect>
              <EditModelLabel htmlFor="target-amount">
                Target Amount
              </EditModelLabel>
              <EditModelInput
                type="text"
                placeholder="Type Amount"
                name="targetAmount"
                value={form.targetAmount}
                onChange={handleChange}
              />
              <EditModelLabel htmlFor="target-date">Target Date</EditModelLabel>
              <EditModelInput
                type="date"
                placeholder="Enter Narration"
                name="targetDate"
                value={form.targetDate}
                onChange={handleChange}
              />
              <Button
                margin="25px 0 5px 0"
                width="104%"
                height="2.75rem"
                text="Save"
                backgroundColor="#2D6A4F"
                border="1px solid #1B4332"
                fontSize="14px"
              />
            </EditModelFieldSet>
          </EditModelForm>
        </EditSavingsBody>
      </Modal>
    );
};

export default EditSavings;