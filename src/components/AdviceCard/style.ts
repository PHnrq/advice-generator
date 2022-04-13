import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--grayish-blue);
    padding: 3.2rem;
    border-radius: 0.8rem;

    font-size: 2.8rem;
    font-weight: 800;

    & p:nth-child(1) {
        color: var(--neon-green);
        margin-bottom: 1.6rem;
    }

    & p:nth-child(2) {
        color: #fff;
    }
    `;