import styled from 'styled-components';

interface ButtonProps {
    text?: string;
    width?: string;
    height?: string;
    margin?: string;
    border?: string;
    fontSize?: string;
    backgroundColor?: string;
    color?: string;
   
}

export const StyleButton = styled.button<ButtonProps>`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    
    padding: 12px 16px 12px 16px;
    //background-color: #40916C;
    background-color: ${(props) => props.backgroundColor || '#40916C'};
    color: #fff;
    width: ${(props) => props.width || 'auto'};
    height: ${(props) => props.height || 'auto'};
    margin: ${(props) => props.margin || 'auto'};
    text-decoration: none;
    border-radius: 8px;
    //border: 1px;
    border: ${(props) => props.border || '1px solid green'};
    transition: background-color 0.3s;
    cursor: pointer;
    font-size:${(props) => props.fontSize|| '10px'};
    color: ${(props) => props.color || 'white'};

    
    &:hover {
   
      }
`