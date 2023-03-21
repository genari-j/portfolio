import styled from 'styled-components'
import { black9, blue9, gray9, white9 } from '../../themes/colors'

export const Container = styled.div`
    width: 2.5rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    overflow: hidden;
    position: fixed;
    right: 1rem;
    bottom: 6rem;

    font-size: 1.5rem;
    padding: 0 0 0 0.5rem;
    border-radius: 0.5rem;

    transition: .3s;

    box-shadow: 0 0 0.5rem 0 ${black9};
    color: ${white9};
    background: ${blue9};

    i {
        display: flex;
    }

    a {
        display: flex;

        transition: .3s;

        color: ${white9};

        :hover {
            transform: translateY(-3px);
            color: ${gray9};
        }
    }

    :hover {
        width: 11rem;

        padding: 0;
        justify-content: center;

        i {
            display: none;
        }
    }
`