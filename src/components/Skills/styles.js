import styled from 'styled-components'


export const Container = styled.section`
    width: 100%;
    max-width: 1050px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    h2 {
        font-weight: 600;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 670px) {
        padding: 0 1rem;
    }
`

export const SkillCards = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem 2rem;
`

export const Card = styled.div`
    width: 100%;
    max-width: 300px;
    height: 260px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);

    i {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 3.5rem;
        padding: 1rem;
        margin: -2.9rem 0 0 0;
        border-radius: 50%;

        color: rgba(255, 255, 255);
        background: rgba(128, 0, 0, 0.8);
    }

    h3 {
        font-weight: 600;
        margin: 0.5rem 0 1rem 0;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }

    div {
        width: 100%;

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`