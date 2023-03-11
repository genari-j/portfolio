import styled from 'styled-components'
import { blue8, blue9, gray9 } from '../../themes/colors'

export const Container = styled.section`
    width: 100%;
    max-width: 1050px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 0 0 2rem 0;
        font-weight: 600;
        text-shadow: 3px 3px 3px ${gray9};
    }

    @media (max-width: 1078px) {
        padding: 0 1rem;
    }
`

export const PersonalSection = styled.div`
    width: 100%;

    position: relative;

    padding: 3rem 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 ${gray9};

    img {
        width: 100%;
        max-width: 400px;
        height: 230px;

        float: left;
        display: inline;

        margin: 0 1.5rem 1rem 0;
        border-radius: 1rem;
        box-shadow: 5px 5px 5px ${gray9};
    }

    p {
        padding: 0 0 1rem 0;
    }

    @media (max-width: 765px) {
        padding: 2rem 1rem 5rem 1rem;
    }

    @media (max-width: 650px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 100%;
            height: 250px;
            margin: 0 0 3rem 0;
        }
    }

    @media (max-width: 580px) {
        padding: 2rem 1rem 4rem 1rem;
    }
`

export const SectionDetails = styled.div`
    width: 200px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;

    position: absolute;
    bottom: 0.7rem;
    right: 0;
`

export const FisrtDetail = styled.div`
    width: 150px;
    height: 2rem;

    border-radius: 0 0 0 2rem;
    box-shadow: 0 0 0.5rem 0 ${gray9};

    background: linear-gradient(45deg, ${blue9}, ${blue8}, ${blue9});
`

export const SecondDetail = styled.div`
    width: 100px;
    height: 1.5rem;

    border-radius: 0 0 0 2rem;
    box-shadow: 0 0 0.5rem 0 ${gray9};
    
    background: linear-gradient(45deg, ${blue9}, ${blue8}, ${blue9});
`