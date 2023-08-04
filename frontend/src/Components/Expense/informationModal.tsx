import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`;

const Information = styled.p`
    color: var(--grey-600, #475467);
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 1.05rem */
    letter-spacing: 0.02188rem;
`;

const InfoCard = styled.div`
    padding: 0.625rem;
    align-items: flex-start;
    gap: 0.625rem;
    border-radius: 0.5rem;
    background: var(--light-green-3, #D8F3DC);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
`;


const InfoModal: React.FC = () => {
    return (
    <Container>
        <InfoCard>
            <Information>
                Confirm and submit transaction. Transactions will be automatically added
                to category Other if Category is not edited within 72hours.
            </Information>  
        </InfoCard>
            
    </Container>
    );
};

export default InfoModal;