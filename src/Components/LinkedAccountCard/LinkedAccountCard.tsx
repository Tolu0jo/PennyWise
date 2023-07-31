import React, { useState, useEffect } from "react";
import LinkAcctCard from "../../assets/LinkedAcctCard.png";
import designLink from "../../assets/designLink.png";
import NoActivity from "./NoActivity";
import AddAccountModal from "./AddAccountForm/AddAccountModal";
import { useAuth } from "../../context/authContext";

import {
  LinkedAccountCardContainer,
  Title,
  Content,
  Item,
  LinkButton,
  Image,
  NoActivityWrapper,
  ModalOverlay,
} from "./LinkedAcctStyle";

interface AccountDetail {
  bankName: string;
  accountNumber: string;
  accountBalance: number;
}

interface AddAccountModalProps {
  onClose: () => void;
  onAddAccount: (newAccount: AccountDetail) => void;
}


const LinkedAccountCard: React.FC <AddAccountModalProps> = () => {
  const [isAddAccountModalOpen, setAddAccountModalOpen] = useState(false);
  const [accounts, setAccounts] = useState<AccountDetail[]>([]);
  const [, setError] = useState<string | null>(null);

  const { fetchAccount } = useAuth(); 

  const handleAddAccountClick = () => {
    setAddAccountModalOpen(true);
  };

  const handleAddAccountModalClose = () => {
    setAddAccountModalOpen(false);
  };

  // Fetch account details from the backend
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const accountData = await fetchAccount(); // Use the fetchAccount function from the useContext

        if (accountData) {
          const { accountNumber, bankName, accountBalance } = accountData;

          setAccounts([{ bankName, accountNumber, accountBalance }]);
        }
      } catch (error) {
        console.error("Error fetching account details:", error);
        setError("Failed to fetch account details. Please try again later.");
      }
    };

    fetchAccountDetails();
  }, [fetchAccount]);

  const handleAddAccount = (newAccount: AccountDetail) => {
    if (accounts.length < 3) {
      setAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    }
  };

  const handleModalOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleAddAccountModalClose();
    }
  };


  return (
    <>
      <LinkedAccountCardContainer>
        <Title>Linked Accounts</Title>
        <Content>

          {accounts.map((account, index) => (
            <Item key={index}>
              <p style={{ position: "absolute", top: "15px", left: "30px", color: "#fff" }}>
                {account.bankName}
              </p>
              <p style={{ position: "absolute", top: "50px", right: "80px", color: "#fff", fontSize: "30px", fontWeight: "bold" }}>
                {account.accountNumber}
              </p>
              <p style={{ position: "absolute", bottom: "10px", left: "20px", color: "#fff", fontSize: "14px" }}>
                Balance: ₦{account.accountBalance}
              </p>
              <Image src={designLink} alt={`Account ${index + 1}`} />
            </Item>
          ))}

          {/* Display empty account cards */}
          {Array.from({ length: 3 - accounts.length }).map((_, index) => (
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
        <NoActivity />
      </NoActivityWrapper>

      {isAddAccountModalOpen && (
       <ModalOverlay onClick={handleModalOverlayClick}>
       <AddAccountModal onClose={handleAddAccountModalClose} onAddAccount={handleAddAccount} />
     </ModalOverlay>
     
      )}
    </>
  );
};

export default LinkedAccountCard;


