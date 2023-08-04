import { DivSection1, ListDiv, Paragraph1, SectionThree, SectionThreeb, StyleBodySectionThree } from "./styles/BodySection3.styled";
import { Img, ImgContainer, Span } from "./styles/BodySection1.styled";
import { AiOutlineCheckSquare } from "react-icons/ai";

export const BodySection3 = () => {
  return (
    <StyleBodySectionThree>
    
      <ImgContainer>
            <Img w='26.25rem' h='25rem' src='https://res.cloudinary.com/dgny9bffu/image/upload/v1687726375/pennyimg1-removebg_h7knrr.png' alt=''/>

        </ImgContainer>
        <SectionThree m="" p="2rem" w='' h='' dp='' jc=''>
            
        <DivSection1
        c="#101828"
        p="4rem 0rem 0rem 0rem"
        m="">
            Keep Track Of Your Transactions
          </DivSection1>
          <Paragraph1 w="" h="" c="#828282">
            Easy-to-use exam editor helps you design any kind of assessments
            from very basic to highly complex.
          </Paragraph1>
          <SectionThree m="" p="0rem" w='32.37rem' h='9rem' dp='flex' jc=''>
            <SectionThreeb>
                <ListDiv>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"}/>
                </span> 
                <Span> Budget Tracking
                    </Span> 
                </ListDiv>
                <ListDiv>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Income Tracking
                    </Span> 
                </ListDiv>
                <ListDiv>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Expenditure Tracking
                    </Span> 
                </ListDiv>
                <ListDiv>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Savings and Others
                    </Span> 
                </ListDiv>

                </SectionThreeb>
                <SectionThree m="" p="" w='13.68rem' h='9rem' dp='' jc=''>
                <SectionThreeb>
                <ListDiv>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"}/>
                </span> 
                <Span> Budget Tracking
                    </Span> 
                </ListDiv>
                <ListDiv>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Income Tracking
                    </Span> 
                </ListDiv>
                <ListDiv>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Expenditure Tracking
                    </Span> 
                </ListDiv>
                <ListDiv>
                <span> <AiOutlineCheckSquare color={"#2D6A4F"} />
                </span> 
                <Span> Savings and Others
                    </Span> 
                </ListDiv>

                </SectionThreeb>
                </SectionThree>
          </SectionThree>
        </SectionThree>
       
    </StyleBodySectionThree>
  );
};
