import React, { ChangeEvent, useEffect, useState } from "react";
import { Modal, Header, SubHeading, Input, BigInput } from "./Modal-styles";
import ModalFrame from "./ModalFrame";
import Button from "../../Button/button";
import { useAuth } from "../../../context/authContext";

interface DailyNeedProps {
  isOpen: boolean;
  onClose: () => void;
  heading?: string;
  editDailyNeed?:any;
  onReload:()=>void
}


const AddDailyNeeds: React.FC<DailyNeedProps> = ({
  isOpen,
  onClose,
  heading,
  editDailyNeed,
  onReload
}) => {
  const {addDailyNeeds,editDailyNeeds} = useAuth()
  const [form,setForm] =useState({
    id:"",
    category:"",
    description:"",
    setLimit:"",
   })

useEffect(()=>{
setForm({
  id:editDailyNeed.id ||"",
  category:editDailyNeed?.category||"",
    description:editDailyNeed?.description||"",
    setLimit:editDailyNeed?.setLimit||"",
})
},[editDailyNeed])



  const handleChange =(e:ChangeEvent<HTMLInputElement> | any)=>{
    const{name,value}=e.target;
    setForm((prev)=>({...prev,[name]:value}))
  }
  

  const handleSubmit = async  (e:React.FormEvent)=>{
   e.preventDefault()
   if(heading === "Add"){
    await addDailyNeeds(form)
   onClose()
   onReload()
   setForm({
    id:"",
    category:"",
    description:"",
    setLimit:"",
  })
}
   await editDailyNeeds(form)
    onClose()
    onReload()
    setForm({
      id:"",
      category:"",
      description:"",
      setLimit:"",
    })
  }
  return (
    <ModalFrame isOpen={isOpen} onClose={onClose}>
      <Modal>
        <form onSubmit={handleSubmit}>
        <Header>{heading ? heading : "Edit"} Daily Needs</Header>
        <SubHeading>Category</SubHeading>
        <Input placeholder="Enter category name" value={form.category} name="category" onChange={handleChange}/>
        <SubHeading>Description</SubHeading>
        <BigInput placeholder="Type brief description (optional)" value={form.description} name="description" onChange={handleChange}/>
        <SubHeading>Set Limit</SubHeading>
        <Input placeholder="Enter Amount"  name="setLimit" value={form.setLimit} onChange={handleChange} />
        <Button
          width="100%"
          height="2.75rem"
          fontSize="1rem"
          backgroundColor="#2D6A4F"
          margin="1.5rem 0 1.5rem 0"
          color="white"
          border="solid 1px green"
          text={heading !== "Add" ? "Save" : "Add"}
        />
        </form>
      </Modal>
    </ModalFrame>
  );
};

export default AddDailyNeeds;
