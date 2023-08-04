import styled from "styled-components";

export const StyleBodySectionSix = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    background-color: #D8F3DC;
    margin: 0 auto;
    padding: 2rem 1.5rem 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Media query for screen size 768px and smaller */
        @media (max-width: 1000px) {
                flex-direction: column;
                align-items: center;
                text-align: center;
    
        }
`

export const SectionFive = styled.div<{ m: string; p: string; w: string; h: string; dp: string; jc: string }>`
width: ${(props) => props.w };
height: ${(props) => props.h};
margin: ${(props) => props.m};
padding: ${(props) => props.p};
display: ${(props) => props.dp};
justify-content: ${(props) => props.jc};

/* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
  padding: 0rem 2rem;
  
}
`;

export const ListDiv1 = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    padding: 0.5rem 0rem;
    /* Media query for screen size 768px and smaller */
    @media (max-width: 1000px) {
        display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0rem 0rem;
    }

`
export const Input = styled.input`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    position: relative;
    width: 100%;
    height: 2.94rem;
    border:none;
    border-bottom: 1px solid #ccc;
    border-radius: 4px;
    background-color: #D8F3DC;
    padding-left: 0.5rem;

    /* Media query for screen size 768px and smaller */
    @media (max-width: 1000px) {

      margin-bottom: 1rem;
    }   

`