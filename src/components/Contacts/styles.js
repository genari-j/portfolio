import styled from 'styled-components'


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
        
        text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1080px) {
        padding: 0 1rem;
    }
`

export const ContactsBackg = styled.div`
    width: 100%;
    height: 19.5rem;

    display: flex;
    justify-content: center;

    position: relative;

    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.3);

    background: url('../src/assets/Contacts/contactBackg.jpg') no-repeat center/cover;
`

export const FirstDetail = styled.div`
    width: 150px;
    height: 2rem;

    position: absolute;
    top: 1.5rem;
    left: 0;

    border-radius: 0 5rem 0 0;

    background: linear-gradient(45deg, rgb(128, 0, 0), rgba(255, 255, 255, 0.2), rgb(128, 0, 0));
`

export const SecondDetail = styled.div`
    width: 100px;
    height: 1.5rem;

    position: absolute;
    top: 4rem;
    left: 0;

    border-radius: 0 5rem 0 0;

    background: linear-gradient(45deg, rgb(128, 0, 0), rgba(255, 255, 255, 0.2), rgb(128, 0, 0));

    @media (max-width: 440px) {
        display: none;
    }
`

export const ThirdDetail = styled.div`
    width: 150px;
    height: 2rem;

    position: absolute;
    bottom: 1.5rem;
    right: 0;

    border-radius: 5rem 0 0 0;

    background: linear-gradient(45deg, rgb(128, 0, 0), rgba(255, 255, 255, 0.2), rgb(128, 0, 0));
`

export const FourthDetail = styled.div`
    width: 100px;
    height: 1.5rem;

    position: absolute;
    bottom: 4rem;
    right: 0;

    border-radius: 5rem 0 0 0;

    background: linear-gradient(45deg, rgb(128, 0, 0), rgba(255, 255, 255, 0.2), rgb(128, 0, 0));

    @media (max-width: 440px) {
        display: none;
    }
`

export const ContactsName = styled.div`
    width: 100%;
    max-width: 300px;
    height: 100%;

    position: relative;

    a {
        position: absolute;
        cursor: pointer;

        font-size: 1.5rem;

        color: rgb(255, 255, 255);
        text-shadow: 2px 2px 3px rgb(0, 0, 0);

        :hover {
            transition: .3s;
            color: rgba(255, 255, 255, 0.5);
        }

        :nth-child(1) {
            top: 4rem;
            left: 4rem;
        }

        :nth-child(2) {
            top: 7rem;
            left: 6rem;
        }

        :nth-child(3) {
            top: 10rem;
            left: 8rem;
        }

        :nth-child(4) {
            top: 13rem;
            left: 10rem;
        }
    }
`