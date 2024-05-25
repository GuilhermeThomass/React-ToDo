import styled from "styled-components";
import Modal from "./Modal";
import { memo } from "react";

const Tittle = styled.h1`
    position: absolute;
    margin-top: -14px;
    font-size: 1.2em;
    font-weight: 500;
    font-family: inherit;
    cursor: default;
`

const Input = styled.input`
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid white;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
`

const Button = styled.button`
    color: #1a1a1a;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #f6f6f6;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
`

interface ModalButtonProps{
    isModalOpen : boolean;
    onBackClick : ()=> void;
}

function ModalButton({isModalOpen,onBackClick}:ModalButtonProps) {
    if(!isModalOpen){
        return null;
    }
    return(
        <Modal onBackClick={onBackClick}>
            <>
                <Tittle>Adicionar Nova Tarefa</Tittle>
                <Input 
                    type="text"
                    placeholder="Tarefa"
                    required
                />
                <Input 
                    type="text"
                    placeholder="Duração"
                    required
                />
                <Button>Submit</Button>
                
            </>
        </Modal>
    )
}

export default memo(ModalButton);