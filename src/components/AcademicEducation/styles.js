import styled from 'styled-components'
import { blue9, gray9, white9 } from '../../themes/colors'

export const Container = styled.section`
    width: 100%;
    max-width: 1050px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    h2 {
        font-weight: 600;
        margin: -1rem 0 -2rem 0;

        text-shadow: 3px 3px 3px ${gray9};
    }

    @media (max-width: 955px) {
        padding: 0 3rem;
    }

    @media (max-width: 955px) {
        padding: 0 1rem 0 3rem;
    }
`

export const SectionContent = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;

    i {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 0.9rem;
        left: -2.7rem;

        font-size: 3.5rem;
        padding: 1rem;
        border-radius: 50%;

        color: ${white9};
        background: ${blue9};

        @media (max-width: 388px) {
            font-size: 2rem;
            padding: 0.5rem;

            top: -1.3rem;
            left: -1.5rem;
        }
    }
`

export const Card = styled.div`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    position: relative;

    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0 ${gray9};

    h3 {
        font-weight: 600;
        text-shadow: 3px 3px 3px ${gray9};

        margin: 0 0 0.5rem 0;
    }
`

export const EstacioIcon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0.9rem;
    left: -2.7rem;

    font-size: 3.5rem;
    padding: 1rem;
    border-radius: 50%;

    color: ${white9};
    background: ${blue9};

    @media (max-width: 388px) {
        font-size: 2rem;
        padding: 0.5rem;

        top: -1.3rem;
        left: -1.5rem;
    }
`