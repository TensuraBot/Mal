import styled from 'styled-components';

export const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000000;
    padding: 1rem;
`

export const ContainerAnimeLikeThis = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    margin: 1rem 0;
    padding: 1rem;
    background-color: #040404;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    justify-items: center;
    align-items: center;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

`;


export const Image = styled.img`
    width: 85%;
    height: 100%;
    border-radius: 5px;
`

export const Button = styled.button`    
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }

    &:transition{
        transform: 0.5s;
    }

`