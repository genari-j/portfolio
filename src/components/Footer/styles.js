import styled from 'styled-components'


export const Container = styled.footer`
    width: 100%;
    height: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    background: linear-gradient(45deg, rgba(165, 42, 42, 0.5), rgba(128, 0, 0, 0.6), rgba(165, 42, 42, 0.5));

    nav ul {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        li a {
            font-weight: 600;
            cursor: pointer;

            text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);

            :hover {
                transition: .3s;
                color: rgba(0, 0, 0, 0.6);
            }
        }
    }

    @media (max-width: 655px) {
        padding: 0 1rem;
        gap: 2rem;
    }

    @media (max-width: 600px) {
        height: 100%;

        display: grid;
        grid-template-columns: repeat(2, 1fr);

        padding: 2rem 3rem;
    }

    @media (max-width: 488px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
    }
`

export const LocalAndMap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
        font-weight: 600;
    }

    iframe {
        cursor: pointer;
        border-radius: 0.5rem;
        
        box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.8);

        :hover {
            transition: .6s;
            width: 300px;
            height: 175px;
        }
    }
`

export const CopyrightAndSocialMedias = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        gap: 0.5rem;

        font-size: 1.5rem;

        a {
            cursor: pointer;

            :hover {
                transition: .3s;
                color: rgb(255, 255, 255);
            }
        }
    }

    span {
        font-weight: 600;
    }
`