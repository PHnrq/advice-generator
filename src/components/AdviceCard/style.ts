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

    .divider-mobile {
        display: none;
    }

    .divider-desktop {
        display: block;
    }

    & p:nth-child(1) {
        color: var(--neon-green);
        font-size: 1.8rem;
    }

    & p:nth-child(2) {
        color: #fff;
    }

    @media (max-width: 675px) {
        max-width: 350px;

        .divider-mobile{
            display: block;
        }

        .divider-desktop{
            display: none;
        }
    }

    @media (min-width: 1441px) {
        max-width: 1400px;
    }
`;