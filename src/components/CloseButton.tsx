import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Button = styled.button`
    display: flex;
    align-self: flex-end;
    position: relative;
    width: 28px;
    height: 28px;
    padding: 0;
    margin-top: -16px;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transition: border-color 0.25s;
`

interface CloseProps{
    onBackClick: ()=> void;
}

export default function Close({onBackClick}:CloseProps) {

    return(
        <>
            <Button onClick={onBackClick}><IoClose color="white" size="2em"/></Button>
        </>
    )
}