import styled from 'styled-components'
import { white9, blue8, blue7, gray9 } from '../../themes/colors'

export const Container = styled.footer`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 6rem;

    padding: 2rem;

    background: linear-gradient(45deg, ${blue7}, ${blue8}, ${blue7});

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

            :hover {
                transition: .3s;
                color: ${white9};
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
        
        box-shadow: 0 0 0.5rem 0 ${gray9};

        :hover {
            transition: .6s;
            width: 275px;
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
                color: ${white9};
            }
        }
    }

    span {
        font-weight: 600;
    }
`