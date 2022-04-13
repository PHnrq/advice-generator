import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    max-width: 675px;
    padding: 5.6rem 8.6rem;
    border-radius: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;

    background:  var(--grayish-blue);
    
    font-size: 2.8rem;
    font-weight: 800;
    text-align: center;

    & p:nth-child(1) {
        color: var(--neon-green);
    }

    & p:nth-child(2) {
        color: #fff;
    }

    @media (max-width: 675px) {
        max-width: 375px;
    }
`;