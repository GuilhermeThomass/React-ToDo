import styled from "styled-components";
import { memo, useState } from "react";
import Close from "./CloseButton";

const Tittle = styled.h1`
    position: absolute;
    margin-top: -14px;
    font-size: 1.2em;
    font-weight: 500;
    font-family: inherit;
    cursor: default;
`
const Input = styled.textarea`
    resize: none;
    width: 13em;
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
const Section = styled.div`
    /* z-index: 1000; */
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0,0,0,0.35);
`
const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;
    padding: 32px 16px 24px 16px;

    border-radius: 16px;

    background-color: #141414;
    transition: transform 0.2s ease;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
    &:active{
      transform: scale(0.96);
    }
`

interface ModalButtonProps{
    isModalOpen : boolean;
    onBackClick : ()=> void;
    handleSubmit : (tarefa : string)=> void;
}

function ModalButton({isModalOpen,onBackClick,handleSubmit}:ModalButtonProps) {
    const [Text,setText] = useState('');
    if(!isModalOpen){
        return null;
    }
    return(
        <Section onClick={onBackClick}>
            <Container onClick={(e)=> e.stopPropagation()}>
                <Tittle>Adicionar Nova Tarefa</Tittle>
                <Close onBackClick={onBackClick}/>
                <Input 
                    rows={3}
                    placeholder="Escrava..."
                    name="task"
                    onChange={(e)=>(setText(e.target.value))}
                    required
                />
                <Button onClick={()=>{
                    handleSubmit(Text)
                    onBackClick();
                }}>Criar</Button>
            </Container>
        </Section>  
    )
}

export default memo(ModalButton);