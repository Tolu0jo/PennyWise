import React, { ReactNode } from "react";
import { StyleButton } from "./Button.styled";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
  width?: string;
  height?: string;
  margin?: string;
  border?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  children?: ReactNode;
  icon?: string;
  type?: string;
  
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  text,
  width,
  height,
  margin,
  border,
  backgroundColor,
  fontSize,
  color,
  icon,
  type,

}) => {
  return (
    <StyleButton
      onClick={onClick}
      disabled={disabled}
      width={width}
      height={height}
      margin={margin}
      border={border}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      color={color}
      type={type}
   
    >
      {icon}
      {text}
    </StyleButton>
  );
};

export default Button;
