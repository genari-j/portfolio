import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Divider = styled.div`
    width: 0.3rem;
    height: 4.5rem;

    margin: 3rem 0;
    border-radius: 1rem;

    background: rgba(128, 0, 0, 0.8);
`

export const ArrowUp = styled.div`
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 2rem;
    right: 4rem;

    font-size: 1.8rem;
    border-radius: 50%;

    box-shadow: 0 0 0.5rem 0 rgb(128, 0, 0);
    background: rgb(255, 255, 255);

    :hover {
        transition: .3s;
        font-size: 1.9rem;
        box-shadow: 0 0 0.5rem 0 rgb(0, 0, 0, 0.5);
    }

    a {
        cursor: pointer;
        margin: 0 0 -0.5rem 0;
        
        color: rgb(128, 0, 0);
    }

    @media (max-width: 935px) {
        right: 2rem;
    }
`