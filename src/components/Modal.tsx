import { memo } from "react"
import styled from "styled-components"
import Close from "./CloseButton";

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
const Container = styled.form`
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

interface ModalProps{
    onBackClick: ()=> void;
    children: JSX.Element;
}


function Modal( {onBackClick , children } : ModalProps ) {
    console.log("Render Modal")
    return (
        <Section onClick={onBackClick}>
            <Container onClick={(e)=> e.stopPropagation()}>
                <Close onBackClick={onBackClick}/>
                {children}
            </Container>
        </Section>
    )
}

export default memo(Modal)