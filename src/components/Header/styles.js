import styled from 'styled-components'


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

    border-bottom: 2px solid rgb(0, 0, 0, 0.3);
    background: rgb(128, 0, 0);

    div:first-child {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        margin: 0.5rem 0 0 0;

        a:first-child {
            font-size: 1.8rem;

            @media (max-width: 815px) {
                color: rgb(255, 255, 255);
            }
        }

        a:last-child {
            font-size: 1.6rem;

            @media (max-width: 815px) {
                color: rgb(255, 255, 255);
            }
        }

        a:hover {
            transition: .3s;
            cursor: pointer;

            color: rgb(255, 255, 255);
        }


    }

    nav ul {
        display: flex;
        gap: 1.5rem;

        li a {
            font-size: 1.1rem;
            font-weight: 600;

            color: rgba(255, 255, 255, 0.8);
            text-shadow: 1px 1px 3px rgba(0, 0, 0);

            :hover {
                transition: .3s;
                cursor: pointer;
                color: rgb(255, 255, 255);
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
                color: rgb(255, 255, 255);
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

    background: rgba(128, 0, 0, 0.6);
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
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
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

            cursor: pointer;

            color: rgb(255, 255, 255);
            background: linear-gradient(45deg, rgba(165, 42, 42, 0.2), rgba(128, 0, 0, 0.6));

            :hover {
                transition: .3s;
                background: rgba(128, 0, 0, 0.5);
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
    background: rgba(0, 0, 0, 0.9);

    nav ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        font-size: 2rem;

        li {
            a {
                color: rgba(255, 255, 255, 0.8);
                text-shadow: 1px 1px 3px rgba(0, 0, 0);

                :hover {
                    transition: .3s;
                    color: rgba(255, 255, 255);
                }
            }
        }
    }
`