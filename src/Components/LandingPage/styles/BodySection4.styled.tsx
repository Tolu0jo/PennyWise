import styled from "styled-components";

export const StyleBodySectionFour = styled.body`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

    background-color: #F9FAFB;
    margin: 0 auto;
    padding: 1rem 5rem 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    /* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem 1rem 1rem;
  
}
`

export const SectionFour = styled.div<{ m: string; p: string; w: string; h: string; dp: string; jc: string }>`
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
`;

export const Card = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
width: 13rem;
height: 25rem;
background-color: white;
padding: 1.5rem ;
display: flex;
flex-direction: column;
align-items: center;
/* Media query for screen size 768px and smaller */
@media (max-width: 1000px) {
margin-bottom: 1rem;
display: flex;
flex-direction: column;
align-items: center;
width: 26rem;
height: 20rem;
border-radius: 8px;
margin-bottom: 2rem;
}
`

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
    max-width: 80%;
    text-align: center;

`

export const Step = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    font-family: "Inter";
    font-size: 1.5rem;
    font-weight: 700;
    color: #081C15;
    padding-bottom: 1rem;
`

export const Title = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    font-family: "Inter";
    font-size: 2.5rem;
    font-weight: 700;
    color: #2D6A4F;
    letter-spacing: 0.25px;
    padding-bottom: 1rem;
`
export const Details = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 600;
    color: #081C15;
    padding-bottom: 0.5rem;
    letter-spacing: 0.15px;
    text-align: center;

    @media (max-width: 1000px) {
        text-align: center;
}
`