import styled from 'styled-components'
import { white9, gray8, gray9, blue9 } from '../../themes/colors'


export const Container = styled.section`
    width: 100%;
    max-width: 1050px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    h2 {
        font-weight: 600;
        text-shadow: 3px 3px 3px ${gray8};
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

    box-shadow: 0 0 0.5rem 0 ${gray9};

    i {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 3.5rem;
        padding: 1rem;
        margin: -2.9rem 0 0 0;
        border-radius: 50%;

        color: ${white9};
        background: ${blue9};
    }

    h3 {
        font-weight: 600;
        margin: 0.5rem 0 1rem 0;
        text-shadow: 3px 3px 3px ${gray8};
    }

    div {
        width: 100%;

        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`