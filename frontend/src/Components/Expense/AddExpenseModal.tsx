import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import { useAuth } from '../../context/authContext';
import Modal from '../Modal/modalComp';


interface Expenditure{
    category: string;
    narration: string;
    dateTime: string;
    amount: string;
}

const Container = styled.div`
background-color: white;
padding: 3px;
border-radius: 1rem;
width:384px;
height:530px;
`;

const Heading = styled.h1`
    color: var(--dark-green, #081C15);
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 2.1rem */
    margin-left:2rem
`;
const FormArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;
const InputSelect = styled.select`
    display: flex;
    padding: 0.75rem;
  
    align-self: stretch;
    border-radius: 0.25rem;
    border: 1px solid var(--gray-400, #BDBDBD);
    background: var(--basic-white, #FFF);
`;
const InputText = styled.input`
    display: flex;
    padding: 0.75rem;
    align-items: center;
   
    align-self: stretch;
    border-radius: 0.25rem;
    border: 1px solid var(--gray-400, #BDBDBD);
    background: var(--grey-100, #F2F4F7);
`
const SelectOption = styled.option`
    display: inline-flex;
    padding: 0.625rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: var(--white, #FFF);
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.16);
`;
const Label = styled.h3`
    color: var(--gray-900, #212121);
    font-family: Heebo;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.25rem; /* 142.857% */
`;
const LabelInput = styled.div`
    display: flex;
    width: 20rem;
    flex-direction: column;
    align-items: flex-start;
`;
const SubmitButton = styled.button`
    display: flex;
    width: 20rem;
    color:white;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    border-radius: 0.5rem;
    background: var(--green-1, #2D6A4F);
    border: none;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem;
`;
interface AddExpenseModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPageReload: () => void 
  }
const AddExpenseModal: React.FC<AddExpenseModalProps> = ({ isOpen, onClose, onPageReload}) => {

    const {addCashExpense,getCategories,
        categories} = useAuth()
      const [selectedOption, setSelectedOption] = useState("");
    const [expense, setExpense] = useState({
        category: selectedOption,
        narration: '',
        amount: '',
        description: ''
    })

    useEffect(() => {
        getCategories
    },[])
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = e.target.value;
        setSelectedOption(selectedOption);
        setExpense((prev) => ({ ...prev, category: selectedOption.replace(/^Savings-/, '') }));
      };
    const handleChange = (e: any)=>{
     const {name,value} = e.target;
     setExpense((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = async (e: any)=>{
        e.preventDefault();
     await addCashExpense(expense)
    
        //  onPageReload();
        // onClose()
    
    }
    
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <Container>
        <Heading>
            Add Expenditure
        </Heading>
        <FormArea >
            <LabelInput>
                <Label>Category</Label>
                <InputSelect onChange ={handleSelectChange} value={selectedOption}>
                <SelectOption disabled selected value="" style={{ color: "#BDBDBD" }}>
                Select
              </SelectOption>
                {categories.map((category:any)=><SelectOption value={(category).replace(/^Savings-/, "")}>{category}</SelectOption>)}
         
                </InputSelect>
            </LabelInput>
            <LabelInput>
                <Label>Narration</Label>
                <InputText name='narration' onChange={handleChange}/>
            </LabelInput>
            <LabelInput>
                <Label>Description</Label>
                <InputText name='description' onChange={handleChange}/>
            </LabelInput>
           
            <LabelInput>
                <Label>Amount</Label>
                <InputText name='amount' onChange={handleChange}/>
            </LabelInput>
            <SubmitButton onClick={handleSubmit}>Add</SubmitButton>
        </FormArea>
    </Container>
    </Modal>
  )
}

export default AddExpenseModal