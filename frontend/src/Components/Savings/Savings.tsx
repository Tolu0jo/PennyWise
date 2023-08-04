import React, { useEffect, useState } from 'react';
import { SavContainer, SavContent, SavDate, SavHeader, SavTitle, SavTarget, TableHeader, TableColumn, TableRow, IconContainer, StatusWrapper, StatusBox, StatusText, TableHeaderBackground } from './Savings.styled';
import Button from '../Button/button';
import ProgressBar from './Savings.styled';
import { BsThreeDotsVertical } from 'react-icons/bs';
import AddSavings from '../Modal/addSavingsTarget/addSavings';
import { DeleteIcon, Edit, EditIcon, EditOptionModalContainer } from '../Modal/edit-optionModal/styles';

import EditOptionModal from '../Modal/edit-optionModal/edit-option';
import { useAuth } from '../../context/authContext';
import EditSavings from '../Modal/editSavingsTarget/editSavings';


const Savings = () => {

    const currentDate = new Date().toLocaleDateString("en-GB");

  const[isNewTragetModalOpen, setNewTargetModalOpen] = useState(false);
  const [threeDotButton, setThreeDotButton] = useState(false);

  const { getSavings, savings,deleteSavings }= useAuth();

  

  const [reloadPage, setReloadPage] = useState(false)
  
  const handleReloadPage = () => {
    setReloadPage(true);
  }

    const handleEditIconClose = () => {
      setEditModal(false);
    };

    const handleNewTragetButtonClick = () => {
      setNewTargetModalOpen(true);
      
    }

    const handleNewTragetModalClose = () => {
        setNewTargetModalOpen(false);
    }
  const [editModal, setEditModal] = useState(false);
  const [savingToEdit, setSavingToEdit] = useState(savings);


  const handleEditIconClick = (id: string) => {
    const saving = savings?.find((data: any) => data.id === id);
    setEditModal(true);
    setSavingToEdit(saving);
  };
  
  useEffect(() => {
    getSavings()
  }, []);

  useEffect(() => {
    if (reloadPage) {
      getSavings();
      setReloadPage(false)
    }
  }, [reloadPage]);
  

  
  const handleDelete = async(id: string) => {
    await deleteSavings(id);
   setReloadPage(true);
  };

  
    return (
      <SavContainer>
        <SavContent>
          <SavHeader>
            <SavTitle>Savings</SavTitle>
            <SavDate>{currentDate}</SavDate>
          </SavHeader>
          <SavTarget>
            <div>
              <h3 style={{ fontSize: "24px" }}>2023 Savings Target</h3>
            </div>
            <div>
              <Button
                onClick={handleNewTragetButtonClick}
                margin="0rem 5rem 0rem 0rem"
                width="9.44rem"
                height="2.75rem"
                text="+ New Target"
                backgroundColor="#2D6A4F"
                border="1px solid #1B4332"
                fontSize="14px"
              />
            </div>
          </SavTarget>

          <TableHeaderBackground>
            <TableHeader>
              <TableColumn>Purpose</TableColumn>
              <TableColumn>Frequency</TableColumn>
              <TableColumn>Amount</TableColumn>
              <TableColumn>Target date</TableColumn>
              <TableColumn>Progress</TableColumn>
            </TableHeader>
          </TableHeaderBackground>
          {savings?.map((data: any) => (
            <>
              <TableRow key={data.id}>
                <TableColumn>{data?.savingPurpose}</TableColumn>
                <TableColumn>{data?.frequency}</TableColumn>
                <TableColumn>{data?.targetAmount}</TableColumn>
                <TableColumn>{data?.targetDate}</TableColumn>
                <TableColumn>
                  <ProgressBar
                    progress={data?.amountSpent/data?.targetAmount * 100}
                  />
                </TableColumn>
                <TableColumn>
                  <IconContainer>
                    <Edit>
                      <EditIcon onClick={() => handleEditIconClick(data.id)} />
                      <DeleteIcon
                        onClick={() => {
                          handleDelete(data.id);
                        }}
                      />
                    </Edit>
                  </IconContainer>
                </TableColumn>
              </TableRow>
              <EditSavings
                isOpen={editModal}
                onClose={handleEditIconClose}
                saving={savingToEdit}
                pageReload={handleReloadPage}
              />
            </>
          ))}

          <StatusWrapper>
            <StatusBox>
              <div
                style={{
                  backgroundColor: "#12B76A",
                  width: "15px",
                  height: "15px",
                  marginRight: "5px",
                }}
              ></div>
              <StatusText>Savings on track</StatusText>
            </StatusBox>
            <StatusBox>
              <div
                style={{
                  backgroundColor: "#FAC515",
                  width: "15px",
                  height: "15px",
                  marginRight: "5px",
                }}
              ></div>
              <StatusText>1 payment behind</StatusText>
            </StatusBox>
            <StatusBox>
              <div
                style={{
                  backgroundColor: "#F04438",
                  width: "15px",
                  height: "15px",
                  marginRight: "5px",
                }}
              ></div>
              <StatusText>Multiple payments behind</StatusText>
            </StatusBox>
          </StatusWrapper>
        </SavContent>
        <AddSavings
          isOpen={isNewTragetModalOpen}
          onClose={handleNewTragetModalClose}
          handlePageReload={handleReloadPage}
        />
      </SavContainer>
    );
};

export default Savings;
