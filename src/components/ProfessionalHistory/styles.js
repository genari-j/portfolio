import styled from 'styled-components'
import { blue9, blue8, gray9 } from '../../themes/colors'

export const Container = styled.section`
    width: 100%;
    max-width: 1050px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-weight: 600;
        margin: 0 0 2rem 0;

        text-shadow: 3px 3px 3px ${gray9};
    }

    h3 {
        font-weight: 600;
        margin: 0 0 0.5rem 0;

        text-shadow: 3px 3px 3px ${gray9};
    }

    @media (max-width: 1080px) {
        padding: 0 1rem;
    }
`

export const CurrentJob = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    position: relative;

    margin: 0 0 2rem 0;
    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 ${gray9};
`

export const LastJob = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    position: relative;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 ${gray9};
`

export const DescriptionJob = styled.p`
    margin: 1rem 0;
`

export const TechsTitle = styled.span`
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;

    color: ${blue9};
`

export const SectionDetails = styled.div`
    width: 100px;

    display: flex;
    justify-content: center;
    gap: 0.5rem;

    position: absolute;
    top: 0;
    right: 8rem;

    @media (max-width: 585px) {
        right: 5rem;
    }

    @media (max-width: 510px) {
        right: 3rem;
    }

    @media (max-width: 445px) {
        right: 1rem;
    }

    @media (max-width: 410px) {
        justify-content: flex-end;
        right: 0.5rem;
    }
`

export const FisrtDetail = styled.div`
    width: 2rem;
    height: 100px;

    border-radius: 0 0 0 2rem;
    box-shadow: 0 0 0.5rem 0 ${gray9};

    background: linear-gradient(45deg, ${blue9}, ${blue8}, ${blue9});

    @media (max-width: 400px) {
        display: none;
    }
`

export const SecondDetail = styled.div`
    width: 2rem;
    height: 80px;

    border-radius: 0 0 2rem 0;
    box-shadow: 0 0 0.5rem 0 ${gray9};
    
    background: linear-gradient(45deg, ${blue9}, ${blue8}, ${blue9});
`

export const PreviousServices = styled.div`
    display: flex;
    gap: 2rem;

    margin: 2rem 0 0 0;

    @media (max-width: 645px) {
        flex-direction: column;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 ${gray9};
`

export const TimeOfService = styled.span`
    font-weight: 600;
`