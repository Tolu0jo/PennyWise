import styled from "styled-components";

export const StyleBodySectionFive = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    background-color: #DFF0D8;
    margin: 0 auto;
    padding: 2rem 1.5rem 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
}

`


export const StyleFAQContainer = styled.div`
  
        max-width: 800px;
        margin: 0 auto;

        /* Media query for screen size 768px and smaller */
        @media (max-width: 1000px) {
                display: flex;
                flex-direction: column;
                align-items: center;
        }       
        
`;




export const StyleFAQCard = styled.div<{ active: boolean }>`
    width: 45rem;
  border-radius: 16px;
  padding: 20px 48px 10px 48px;
  border: 1px solid #98a2b3;
  margin: 20px 0px;
  background-color: ${(props) => (props.active ? "#D8F3DC" : "transparent")};

  /* Media query for screen size 768px and smaller */
  @media (max-width: 1000px) {
          width: 60%;
          align-items: center;
  }         
`;

export const StyleQuestion = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        
`;

export const StyleAnswer = styled.div`
        display: none;
        margin-top: 0; 

         p {
        margin: 0 auto;
        font-size: 16px;
        padding: 0px 40px 5px 0px;
        
                        }
`;

export const Step1 = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 700;
    color: #081C15;
    padding-bottom: 1rem;
    padding-right: 2rem;
`
export const ArrowIcon = styled.div`
  font-size: 24px;
  width: 32px;
  height: 32px;
`;