import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormContainer,
  FormGroup,
  Label,
  Input,
  Button,
  CustomFileInputWrapper,
  CustomFileInputText,
  HiddenFileInput,
} from "./AddAccountStyle";
import { useAuth } from "../../../context/authContext";
import Upload from "../../../assets/upload.png";

interface AddAccountModalProps {
  onClose: () => void;
  handleReload: () => void;
}

const AddAccountModal = (
{onClose,
handleReload}:AddAccountModalProps
) => {
  const initialFormData = {
    bankName: "",
    accountNumber: "",
    accountName: "",
    bvn: "",
    // identification: null as File | null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const { addAccount } = useAuth();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      const file = (event.target as HTMLInputElement)?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const fileAsString = reader.result as string;
          
          setFormData((prevData) => ({
            ...prevData,
            [name]: fileAsString,
          }));
        };
        reader.readAsDataURL(file);
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: null,
        }));
      }
    } else {
      const newValue =
        name === "accountNumber" || name === "bvn" ? Number(value) : value;

      setFormData((prevData) => ({
        ...prevData,
        [name]: newValue,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Validation for account data
      if (formData.accountNumber === "") {
        toast.error("Account number is required.");
        return;
      }

      if (formData.bvn === "") {
        toast.error("BVN is required.");
        return;
      }

      console.log(formData);
      // Call the addAccount function from the context to handle the API request
      await addAccount(formData);
      onClose();
      handleReload();
    } catch (error) {}
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit} style={{ width: "320px" }}>
        <h2>Add Account</h2>
        <small>Link bank accounts to track your finances</small>
        <FormGroup>
          <Label htmlFor="bankName" style={{ marginTop: "30px" }}>
            Add Account
          </Label>
          <Input
            type="text"
            id="bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Bank Name"
            required
          />
          <Input
            type="number"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            placeholder="Account number"
          />
          <Input
            type="text"
            id="accountName"
            name="accountName"
            value={formData.accountName}
            onChange={handleChange}
            placeholder="Account name"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="bvn">BVN</Label>
          <Input
            type="number"
            id="bvn"
            name="bvn"
            value={formData.bvn}
            onChange={handleChange}
            placeholder="Enter your BVN"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="identification">Valid Means of Identification</Label>
          <CustomFileInputWrapper>
            <CustomFileInputText>
              Upload valid ID
              <img src={Upload} alt="upload" width="20" />
            </CustomFileInputText>
            <HiddenFileInput
              type="file"
              id="identification"
              name="identification"
              // onChange={handleChange}
              required
            />
          </CustomFileInputWrapper>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};

export default AddAccountModal;
