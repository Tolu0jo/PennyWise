import styled from 'styled-components';

export const FormContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContent = styled.div`
    display: flex;
    padding: 1.5rem 1rem;
    background-color: white;
    border-radius: 1.5rem;
`;



