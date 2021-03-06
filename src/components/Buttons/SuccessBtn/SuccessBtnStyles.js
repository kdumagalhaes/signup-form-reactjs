import styled from 'styled-components'

export const SuccessBtnTag = styled.button `
    width: 100%;
    height: 50px;
    background-color: ${({theme}) => theme.colors.color2};
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 0px 0px hsl(154, 59%, 41%);
    margin: 20px 0;
    transform: translateY();
    transition: box-shadow 0.1s, transform 0.1s;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.1rem;
    letter-spacing: 1px;

    &:hover {
        box-shadow: none;
        transform: translateY(4px);
    }

    @media (max-width: 375px) {
        font-size: 1rem;
    }
`