import { useCallback, useState } from "react"
import ModalButton from "./components/ModalButton"
import styled from "styled-components";
import Table from "./components/Table";


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
  gap: 16px;
  padding:16px 32px;
  display: flex;
  flex-direction: column;
  
`
const Container = styled.div`
  display: flex;
  gap: 8px;
`

function App() {
  const [isModalOpen,setIsModalOpen] = useState(false);

  const toggleModal = useCallback(()=>{
    setIsModalOpen(wasModalOpen => !wasModalOpen);
  },[setIsModalOpen])
  return (
    <>
      <Section>
        <h1 style={{margin:0}}>To-do</h1>
        <Container>
          <Button onClick={toggleModal}>Adionar Tarefa</Button> <ModalButton isModalOpen={isModalOpen} onBackClick={toggleModal}/>
          <Button>Remover Tarefa</Button>
        </Container>
        <Table/>
      </Section>
    </>
  )
}

export default App
