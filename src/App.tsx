import { useCallback, useState } from "react"
import ModalButton from "./components/ModalButton"
import styled from "styled-components";
import Table from "./components/Table";

import { FcFolder } from "react-icons/fc";


const Button = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: transform 0.2s ease;
    box-shadow: 0 5px 10px rgba(0,0,0,0.5);
    &:active{
      transform: scale(0.96);
    }
`

const Section = styled.div`
  height: calc(100vh - 64px);
  width: calc(100vw - 48px);
  gap: 32px;
  padding:32px 16px 32px 32px;
  display: flex;
  
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 16vw;
  gap: 24px;
`
const TableArea = styled.div`
  background-color: #3d3d3d ;
  height: 100%;
  width: 100%;
  border-radius: 12px;
`

function App() {
  const [isModalOpen,setIsModalOpen] = useState(false);

  const toggleModal = useCallback(()=>{
    setIsModalOpen(wasModalOpen => !wasModalOpen);
  },[setIsModalOpen])

  return (
    <>
      <Section>
        <Container>
          <FcFolder size='6em'/>
          <h1 style={{margin:0 }}>Lista De Tarefas</h1>
          <Button onClick={toggleModal}>Adionar Tarefa</Button> <ModalButton isModalOpen={isModalOpen} onBackClick={toggleModal}/>
          <Button>Remover Tarefa</Button>
        </Container>
        <TableArea>
          <Table/>
        </TableArea>
      </Section>
    </>
  )
}

export default App
