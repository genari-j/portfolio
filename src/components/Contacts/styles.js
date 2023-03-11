import styled from 'styled-components'
import { white9, black9, blue9, gray9, gray8 } from '../../themes/colors'

export const Container = styled.section`
    width: 100%;
    max-width: 1050px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 0 1rem 0;

    h2 {
        font-weight: 600;
        margin: 0 0 2rem 0;
        
        text-shadow: 3px 3px 3px ${gray9};
    }

    @media (max-width: 1080px) {
        padding: 0 1rem;
    }
`

export const ContactsBackg = styled.div`
    width: 100%;
    height: 18rem;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0 ${gray9};

    background: url('https://www.perthmortgagespecialist.com.au/images/about/Contact-Me.jpg') no-repeat center/cover;
`

export const ContactsName = styled.div`
    width: 100%;
    max-width: 300px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    padding: 1rem 0;
    border-radius: 0.5rem;

    backdrop-filter: blur(0.5rem);
    -webkit-backdrop-filter: blur(0.5rem);
    background: transparent;

    div {
        display: flex;
        flex-direction: column;
    }

    a {
        font-size: 1.5rem;

        color: ${white9};
        text-shadow: 2px 2px 3px ${black9};

        :hover {
            transition: .3s;
            color: ${gray9};
        }
    }
`