import React from "react";
import Modal from "../../LinkedAccountCard/modalComp";
import checker from "../../../assets/Success.png";
import "./successModel.css";
import { useNavigate } from "react-router";

interface SuccessModelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModel: React.FC<SuccessModelProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="success-modal">
        <img src={checker} alt="checker-logo" className="checker-logo" />
        <h2 className="success-modal-title">Successful</h2>
        <p className="texts">Your password has been changed successfully</p>
        <p className="texts">Login to access your account</p>
        <button
          className="success-modal-button"
          onClick={() => navigate("/login")}
        >
          Continue to Login
        </button>
      </div>
    </Modal>
  );
};

export default SuccessModel;
