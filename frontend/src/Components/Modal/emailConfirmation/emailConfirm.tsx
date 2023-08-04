import React from "react";
import Modal from "../../LinkedAccountCard/modalComp";
import './emailConfirm.css'

interface EmailConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailConfirmation: React.FC<EmailConfirmationProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="email-confirmation-modal">
        <h2 className="email-confirmation-title">Check your mail</h2>
        <p className="main-text">
          We sent a password reset link to your email. Please click on the link
          to reset the password.
        </p>
        <p className="email-footer">
          Didn't receive an email ? <a href="#">Click to Resend</a>
        </p>
      </div>
    </Modal>
  );
};

export default EmailConfirmation;
