import styled from "styled-components";

export const StyleBodySectionTwo = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

  background-color: #F9FAFB;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* Media query for screen size 1000px and smaller */
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const SectionTwo = styled.div<{ m: string; p: string; w: string; h: string; dp: string; jc: string }>`
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
 
}
`
export const SectionTwob = styled.div`
    display: flex;
    justify-content: space-between;

    /* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
        padding: 1rem 0rem 01rem 0rem;
        
}
  
`


export const Icon = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    padding: 0.2rem 1rem 1rem 1rem;
    margin: 0;
    color: #081C15;
`

export const Head5 = styled.h5`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    color: #081C15;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    

`
export const Paragraph = styled.p<{ w:string; h:string; c:string}>`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    color: ${(props) => props.c};
    padding: 1rem 0rem;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.15px;
    font-family: "Inter";
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    max-width: 70%;

    /* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
    text-align: center;
    align-items: center; 
  
}
`
