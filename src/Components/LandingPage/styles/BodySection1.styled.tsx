import styled from "styled-components";

export const StyleBodySectionOne = styled.div`
background-color: #d8f3dc;
margin: 0 auto;
padding: 2rem 5rem;
display: flex;
align-items: flex-start;
justify-content: space-between;

/* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
    display: flex;
  flex-direction: column;
  align-items: center;

}
`;

export const ImgContainer = styled.div`
  max-width: 100%;
  height: auto;

`;

export const Img = styled.img<{ w: string; h: string; }>`
width: ${(props) => props.w};
height: ${(props) => props.h};
object-fit: cover;
border-radius: 8px;

`;

export const SectionOne = styled.div<{ m: string; p: string; w: string; h: string; dp: string; jc: string }>`
width: ${(props) => props.w};
height: ${(props) => props.h};
margin: ${(props) => props.m};
padding: ${(props) => props.p};
display: ${(props) => props.dp};
justify-content: ${(props) => props.jc};

/* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0rem 0rem 0rem;
  
}
`;

export const DivSection = styled.div<{ c: string; p: string; m: string }>`
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
  max-width: 80%;
}
`;


export const Span = styled.span`
font-weight: 400;
font-size: 1rem;
font-family: Inter;
letter-spacing: 0.15px;
color: #2d6a4f;
margin: 1rem;
`;

export const ParagraphI = styled.p<{ w: string; h: string; c: string }>`
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
    max-width: 60%;

    /* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
    text-align: center;
    align-items: center;
    padding: 1rem 5rem;
  
}
`