import styled from 'styled-components'
import { black9, blue7, blue8, blue9, gray8, gray9, white9 } from '../../themes/colors'


export const Container = styled.header`
    width: 100%;
`

export const FirstSection = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    position: fixed;
    z-index: 100;

    padding: 0.5rem 0;

    border-bottom: 2px solid ${blue7};
    background: ${blue9};

    div:first-child {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        margin: 0.5rem 0 0 0;

        a:first-child {
            font-size: 1.8rem;
            color: ${blue7};
        }

        a:last-child {
            font-size: 1.6rem;
            color: ${blue7};
        }

        a:hover {
            transition: .3s;
            cursor: pointer;

            color: ${white9};
        }


    }

    nav ul {
        display: flex;
        gap: 1.5rem;

        li a {
            font-size: 1.1rem;
            font-weight: 600;

            color: ${blue7};
            text-shadow: 1px 1px 3px ${black9};

            :hover {
                transition: .3s;
                cursor: pointer;
                color: ${white9};
            }
        }

        @media (max-width: 815px) {
            display: none;
        }
    }

    div:last-child {
        display: none;

        button {
            font-size: 2rem;
            margin: 0 0 -0.7rem 0;

            background: transparent;

            @media (max-width: 815px) {
                color: ${white9};
            }
        }
    }

    @media (max-width: 815px) {
        div:last-child {
            display: block;
        }
    }
`

export const SecondSection = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${blue8};
`

export const SecondSectionContent = styled.div`
    width: 100%;
    max-width: 1050px;

    display: flex;
    align-items: center;
    gap: 2rem;

    padding: 6.5rem 0 2rem 0;

    div:first-child img {
        width: 100%;
        max-width: 1000px;

        border-radius: 50%;
    }

    div:last-child {
        h2 {
            margin: 0 0 0.6rem 0;
            text-shadow: 1px 1px 3px ${gray9};
        }

        a {
            width: 100%;
            max-width: 150px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.3rem;

            font-size: 1rem;
            padding: 0.5rem 1rem;
            margin: 0.5rem 0 0 0;
            border-radius: 0.5rem;

            transition: .3s;

            cursor: pointer;

            color: ${white9};
            background: linear-gradient(45deg, ${blue9}, ${blue8});

            :hover {
                background: ${blue9};
            }
        }
    }

    @media (max-width: 1080px) {
        padding: 6rem 1rem 2rem 1rem;
    }

    @media (max-width: 720px) {
        flex-direction: column;

        div:first-child img {
            max-width: 300px;
        }
    }
`

export const MenuMobile = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    top: 0;
    z-index: 100;

    border: 0.5rem solid rgba(255, 255, 255, 0.2);
    background: ${black9};

    nav ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        font-size: 2rem;

        li {
            a {
                color: ${gray9};
                text-shadow: 1px 1px 3px ${black9};

                :hover {
                    transition: .3s;
                    color: ${white9};
                }
            }
        }

        @media (max-height: 415px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem 6rem;
        }
    }
`