import React from "react";
import { Modal, Header, SubHeading, Input, BigInput, StyledSelect } from "./Modal-styles";
import ModalFrame from "./ModalFrame";
import Button from "../../Button/button";
import {useState,useEffect} from "react"
import { useAuth } from "../../../context/authContext";
const PlannedPayment = ({ isOpen, onClose, heading ,payment,onReload}: any) => {
  const {addplannedPayment,editPlannedPayment} = useAuth()
  const [option, setOption] = useState("Daily")

  const [form,setForm] =useState({
    id:"",
    category:"",
    frequency:option,
    amount:"" 
  });

  useEffect(()=>{
    setForm({
      id:payment?.id||"",
      category:payment?.category||"",
      frequency:payment?.frequency||"",
      amount:payment?.amount||""
    })
  },[payment])
 const handleSelectChange =(e:React.ChangeEvent<HTMLSelectElement>)=>{
     const option=e.target.value
      setOption(option);
  setForm((prev)=>({...prev,frequency:option}))
 }

const handleChange =(e:any)=>{
const{name,value} = e.target;
setForm((prev)=>({...prev,[name]:value}))
}

const handleSubmit = async (e:any)=>{
  e.preventDefault();
  if(heading === "Add"){
    console.log(form)
    await addplannedPayment(form)
    onClose()
    setForm({
      id:"",
      category:"",
      frequency:"",
      amount:""
    })
    onReload()
  }
  await editPlannedPayment(form)
  onClose()
  setForm({
    id:"",
    category:"",
    frequency:"",
    amount:""
  })
  onReload()
}

  return (

    <ModalFrame isOpen={isOpen} onClose={onClose}>
      <Modal>
      <form onSubmit = {handleSubmit}>
        <Header>{heading} Planned Payments</Header>
        <SubHeading>Category</SubHeading>
        <Input placeholder="Enter category" name="category"  value={form.category} onChange={handleChange}/>
        <SubHeading>Amount</SubHeading>
        <Input placeholder="Enter Amount" name="amount" value={form.amount} onChange={handleChange} />
       
        <SubHeading>Frequency</SubHeading>
        <StyledSelect onChange={handleSelectChange} value={option} >
              <option value={"Daily"}>Daily</option>
              <option value= {"Monthly"}>Montly</option>
              <option value={"Yearly"}>Yearly</option>
            </StyledSelect>
        <Button
          width="100%"
          height="2.75rem"
          fontSize="1rem"
          backgroundColor="#2D6A4F"
          margin="1.5rem 0 1.5rem 0"
          color="white"
          onClick={() => !isOpen}
          border="solid 1px green"
          text={heading !== "Add" ? "Save" : "Add"}
        />
        </form>
      </Modal>
    </ModalFrame>
  );
};

export default PlannedPayment;
