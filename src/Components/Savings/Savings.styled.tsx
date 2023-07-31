import styled from 'styled-components';

export const SavContainer = styled.div`
    display: flex;
`;

export const NavSav = styled.div`
    display: flex;
    flex-direction: column; 
   
`;
export const SavContent = styled.div`
    flex-grow: 1;
    background-color: #F5F5F5; 
    margin: 0px 80px 0px 30px;
    // border: 1px solid red;
`;

export const SavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SavTitle = styled.h2`
  color: #2d6a4f;
  font-family: "Inter", sans-serif;
  font-size: 27px;
  font-weight: 600;
`;

export const SavDate = styled.p`
  font-weight: 300;
  font-size: small;
  margin-right: 60px;
`;

export const SavTarget = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableHeaderBackground = styled.div`
  background-color: #eaecf0;
  border-radius: 10px;
  border: 2px solid #eaecf0;
  margin-top: 1.2rem;
  margin-right: 60px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 12px 5px 13px 5px;
  margin: 10px 180px 0px 0px;
  border-radius: 8px;
  font-weight: 600;
`;

export const TableColumn = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: flex-start;
  // padding: 30px 30px 10px 0px;
  padding: 13px 10px 13px 0px;
  margin: 10px 60px 5px 0px;
  border-bottom: 1px solid lightgrey;
  // border: 2px solid red;

`;

interface ProgBarProps {
    color: string;
    progress: number;
  }

export const ProgContainer = styled.div`
    width: 100%;
    height: 7px;
    background-color: #D8F3DC;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ProgBar = styled.div<ProgBarProps>`
    height: 100%;
    background-color: ${(props) => props.color};
    border-radius: 4px;
    width: ${(props) => props.progress}%;
    display: flex;
    
`;

export const ProgressBarText = styled.div`
    padding-left: 0.2rem;
`;

interface ProgressBarProps {
    progress: number;
  }

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    let progressBarColor = '';
    if (progress >= 50) {
      progressBarColor = '#12B76A';
    } else if (progress >= 30) {
      progressBarColor = '#FAC515';
    } else if (progress <= 30) {
        progressBarColor = '#F04438';
      } else {
      progressBarColor = '';
    }
  
    return (
        <>
      <ProgContainer>
        <ProgBar color={progressBarColor} progress={progress}>   
        </ProgBar>
      </ProgContainer>
      <ProgressBarText>{progress}%</ProgressBarText>
      </>
    );
  };
  
  export default ProgressBar;

export const ActionIcons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StatusWrapper = styled. div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-right: 5rem;
`;

export const StatusBox = styled.div`
    display: flex;
    align-items: center;
`;

export const StatusText = styled.div`
    margin-left: 5px;
    font-size: 0.7rem;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: left;
`;

export const IconContainer = styled.div`
    display: flex;
    cursor: pointer;
    padding-top: 0.25rem;
    margin-left: 60px;
    gap: 2.5rem;
    // border: 2px solid green;
   
    `;