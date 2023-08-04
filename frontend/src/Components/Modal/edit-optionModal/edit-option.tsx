import React, { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditModal from "../editModalComp";
import { ThreeDot, Edit, EditIcon, DeleteIcon } from "./styles";

import EditSavings from "../editSavingsTarget/editSavings";
import { useAuth } from "../../../context/authContext";

interface OptionalProps {
  isOpen: boolean;
  onClose: () => void;
  id: string
  pageReload:()=>void;
}
const EditOptionModal: React.FC<OptionalProps> = ({ isOpen, onClose,id,pageReload }) => {
  const { deleteSavings, savings } = useAuth()
  console.log(id)
  const [editModal, setEditModal] = useState(false)
  const [savingToEdit, setSavingToEdit] = useState(savings)
  const handleEditIconClick = (id:string) => {
       const saving =savings.find((data:any)=>data.id === id)
    setEditModal(true)
    setSavingToEdit(saving)
  }
  


    const handleEditIconClose = () => {
        setEditModal(false)
    }

  const handleDelete=(id:string) => {
    deleteSavings(id)
    pageReload()
  }
  return (
    <EditModal isOpen={isOpen} onClose={onClose}>
      <Edit>
        <EditIcon
          onClick={() => handleEditIconClick(id)}
        
        />
        <span
          style={{
            marginLeft: "20px",
          }}
        >
          Edit
        </span>
      </Edit>
      <EditSavings
        isOpen={editModal}
        onClose={handleEditIconClose}
        saving={savingToEdit}
        pageReload={pageReload}
      />
      <Edit>
        <DeleteIcon
          onClick={() => {
            handleDelete(id);
          }}
        />
        <span style={{ color: "red", marginLeft: "5px" }}>Delete</span>
      </Edit>
    </EditModal>
  );
};

export default EditOptionModal;
