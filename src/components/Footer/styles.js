import styled from 'styled-components'


export const Container = styled.footer`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 6rem;

    padding: 2rem;

    background: linear-gradient(45deg, rgba(165, 42, 42, 0.5), rgba(128, 0, 0, 0.6), rgba(165, 42, 42, 0.5));

    @media (max-width: 579px) {
        gap: 4rem;
    }

    nav {
        width: 100%;
        max-width: 220px;
    }

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
`

export const LocalAndMap = styled.div`
    width: 100%;
    max-width: 220px;

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
        }
    }
`

export const CopyrightAndSocialMedias = styled.div`
    width: 100%;
    max-width: 220px;

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