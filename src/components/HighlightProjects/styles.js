import styled from 'styled-components'


export const Container = styled.section`
    width: 100%;
    max-width: 1050px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h2 {
        font-weight: 600;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }

    h3 {
        margin: 0 0 1rem 0;
        font-weight: 600;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1085px) {
        padding: 0 1rem;
    }
`

export const DeliveryApp = styled.div`
    width: 100%;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);
`

export const FirstImageAndDescriptions = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin: 0 0 1.5rem 0;

    img {
        width: 100%;
        max-width: 450px;

        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 825px) {
        flex-direction: column;
        margin: 0 0 1rem 0;
    }
`

export const SecondImageAndUsersList = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
        width: 100%;
        max-width: 300px;

        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);

        @media (max-width: 825px) {
            display: none;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        ul li {
            margin: 0 0 0.05rem 0;
            list-style: disc;

            :first-child {
                font-size: 1.1rem;
                font-weight: 600;
                margin: 0 0 0.5rem 0;
                list-style: none;

                text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
            }
        }

        @media (max-width: 885px) {
            padding: 0 0 0 1rem;
        }

        @media (max-width: 825px) {
            flex-direction: row;
        }

        @media (max-width: 565px) {
            flex-direction: column;
        }
    }
`

export const PatientSys = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);

    h3 {
        text-align: end;
        font-weight: 600;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }
`

export const PatientDescriptions = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    div {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    img {
        width: 100%;
        max-width: 550px;

        border-radius: 0.5rem;

        box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);

        @media (max-width: 975px) {
            max-width: 350px;
        }

        @media (max-width: 665px) {
            max-width: 450px;
        }
    }

    @media (max-width: 665px) {
        flex-direction: column;
    }
`

export const CardSimulator = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);

    h3 {
        font-weight: 600;
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }
`

export const CardSimulatorDescriptions = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    img {
        width: 100%;
        max-width: 550px;

        border-radius: 0.5rem;

        box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);

        @media (max-width: 975px) {
            max-width: 350px;
        }

        @media (max-width: 665px) {
            max-width: 450px;
        }
    }

    div {
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 665px) {
        flex-direction: column;
    }
`