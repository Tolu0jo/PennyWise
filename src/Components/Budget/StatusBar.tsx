import styled from "styled-components";
interface ProgBarProps {
  color: string;
  progress: number;
}

export const ProgContainer = styled.div`
  width: 100%;
  height: 7px;
  background-color: #d8f3dc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;

export const ProgBar = styled.div<ProgBarProps>`
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 4px;
  width: ${(props) => {if(props.progress > 100 ){
    return 100
  }else{ return props.progress}}}%;
  display: flex;
`;

export const ProgressBarText = styled.div`
  padding-left: 0.2rem;
  margin-right: 1rem;
`;

interface ProgressBarProps {
  progress: number;
}

const StatusBar: React.FC<ProgressBarProps> = ({ progress }) => {
  let progressBarColor = "";
  if (progress < 100) {
    progressBarColor = "#12B76A";
  } else if ((progress == 100)) {
    progressBarColor = "#FAC515";
  } else {
   progressBarColor = "#F04438";
  }

  return (
    <>
      <ProgContainer>
        <ProgBar color={progressBarColor} progress={progress}></ProgBar>
      </ProgContainer>
      <ProgressBarText>{ progress + "%"}</ProgressBarText>
    </>
  );
};

export default StatusBar;
