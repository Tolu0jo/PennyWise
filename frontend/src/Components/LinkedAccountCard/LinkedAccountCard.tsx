import React, { useState, useEffect } from "react";
import LinkAcctCard from "../../assets/LinkedAcctCard.png";
import designLink from "../../assets/designLink.png";
import NoActivity from "./NoActivity";
import AddAccountModal from "./AddAccountForm/AddAccountModal";
import { useAuth } from "../../context/authContext";
import { format } from "date-fns";
import {
  LinkedAccountCardContainer,
  Title,
  Content,
  Item,
  LinkButton,
  Image,
  NoActivityWrapper,
  ModalOverlay,
  TitleHead,
  TitleHead1,
} from "./LinkedAcctStyle";
import { set } from "date-fns";
import LinkedAccountCardValue, { ScroLL } from "./LinkedAccountCard2/LinkedAccountCardValue";

interface AccountDetail {
  bankName: string;
  accountNumber: string;
  accountBalance: number;
}

interface AddAccountModalProps {
  onClose: () => void;
  onAddAccount: (newAccount: AccountDetail) => void;
}

const LinkedAccountCard = () => {
  const [isAddAccountModalOpen, setAddAccountModalOpen] = useState(false);
  const [accounts, setAccounts] = useState<AccountDetail[]>([]);


  const {  getAccounts, accountDetails } = useAuth();

  const handleAddAccountClick = () => {
    setAddAccountModalOpen(true);
  };

  const handleAddAccountModalClose = () => {
    setAddAccountModalOpen(false);
  };

  const currentDate = Date.now();

  const formattedDate = format(currentDate, "dd/MM/yyyy");
  // Fetch account details from the backend
  useEffect(() => {
   
      // try {
      //   const accountData = await fetchAccount(); // Use the fetchAccount function from the useContext

      //   if (accountData) {
      //     const { accountNumber, bankName, accountBalance } = accountData;

      //     setAccounts([{ bankName, accountNumber, accountBalance }]);
      //   }
      // } catch (error) {
      //   console.error("Error fetching account details:", error);
      //   setError("Failed to fetch account details. Please try again later.");
     // }
      getAccounts();
    setAccounts(accountDetails);
  


    
  }, []);

  console.log(accountDetails);
  // const handleAddAccount = (newAccount: AccountDetail) => {
  //   if (accounts.length < 3) {
  //     setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
  //   }
  // };
  

  const [reload,setReload]= useState(false)
  const handleReload = ()=>{
  setReload(true);
  }


  useEffect(()=>{
  if(reload) {
    getAccounts();
    setAccounts(accountDetails); 
  }

  },[reload])

  const handleModalOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleAddAccountModalClose();
    }
  };

  return (
    <>
    <ScroLL>
      <TitleHead>
        <TitleHead1>Dashboard</TitleHead1>

        <p>{formattedDate}</p>
      </TitleHead>
      <LinkedAccountCardContainer>
        <Title>Linked Accounts</Title>
        <Content>
          {accountDetails?.map((account:any, index:number) => (
            <Item key={index}>
              <p
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "30px",
                  color: "#fff",
                }}
              >
                {account?.bank_name}
              </p>
              <p
                style={{
                  position: "absolute",
                  top: "50px",
                  right: "80px",
                  color: "#fff",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                {account?.account_number}
              </p>
              <p
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "20px",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                Balance: ₦{account?.account_balance}
              </p>
              <Image src={designLink} alt={`Account ${index + 1}`} />
            </Item>
          ))}

       
          {Array.from({ length: 3 - accountDetails?.length }).map((_, index) => (
            <Item key={index}>
              <LinkButton to="#" onClick={handleAddAccountClick}>
                + Add Account
              </LinkButton>
              <Image src={LinkAcctCard} alt={`Empty Account ${index + 1}`} />
            </Item>
          ))}
        </Content>
        
      </LinkedAccountCardContainer>
      <NoActivityWrapper>
      {accountDetails.length === 0 ?
           <NoActivity /> :
        <LinkedAccountCardValue/>
        }
      </NoActivityWrapper>
      </ScroLL>


      {isAddAccountModalOpen && (
        <ModalOverlay onClick={handleModalOverlayClick}>
          <AddAccountModal
            onClose={handleAddAccountModalClose}
            handleReload={handleReload}
          />
        </ModalOverlay>
      )}
    </>
  );
};

export default LinkedAccountCard;
