import styled from "styled-components";

export const Conteiner = styled.div`
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DataInput = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`;

export const CategoriaInput = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 150px;
`;

export const TitleInput = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`;

export const ValueInput = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
`;

export const Button = styled.button`
    width: 20%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: blue;
        color: white;
    }
`;