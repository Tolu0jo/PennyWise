import styled from "styled-components";

export const StyleBodySectionThree = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    background-color: #FFFFFF;
    margin:  0 auto;
    padding: 2rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
  padding: 2rem 2rem 2rem 2rem;
    
}
`

export const ListDiv = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    padding: 0.5rem 0rem;

`

export const SectionThree = styled.div<{ m: string; p: string; w: string; h: string; dp: string; jc: string }>`
width: ${(props) => props.w };
height: ${(props) => props.h};
margin: ${(props) => props.m};
padding: ${(props) => props.p};
display: ${(props) => props.dp};
justify-content: ${(props) => props.jc};


/* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
  flex-direction: row;
  align-items: flex-start;
  padding: 0rem 0rem 0rem 5rem;

  
}

`;

export const SectionThreeb = styled.div`
width: 15.68rem;
height: 9rem;



 /*Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
  flex-direction: flex;
  align-items: center;
  padding: 0rem 0rem 0rem 0rem;
  

  
}

`;

export const DivSection1 = styled.div<{ c: string; p: string; m: string}>`
font-weight: 700;
font-size: 2rem;
font-family: Inter;
color: ${(props) => props.c};
margin: ${(props) => props.m};
padding: ${(props) => props.p};

span {
  color: #2d6a4f;
  
}
/* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
    text-align: center;
    align-items: center;
}
`;

export const Paragraph1 = styled.p<{ w:string; h:string; c:string}>`
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
    max-width: 100%;

    /* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
    text-align: center;
    align-items: center;
    
    
  
  
}
`