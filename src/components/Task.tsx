import styled from "styled-components";
import { memo } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #3d3d3d ;
    border-radius: 12px;
`
const TittleStatus = styled.h1`
    font-size: 1.6em;

    padding: 8px 32px;

    display: flex;
    justify-content: center;
    align-items: center;
`
const TittleTask = styled.h1`
    font-size: 1.6em;
    padding: 8px 32px;
    width: 100%;
`
const TableBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px 0;
    &:hover{
        background-color: rgba(100,100,100,0.2);
        cursor: pointer;
    }
`
const RowH = styled.div`
    display: flex;
    flex-direction: row;
`
const CheckboxCont = styled.div`
    display: flex;
    padding: 8px 59.3px;

    justify-content: center;
    align-items: center;
    border-right: 2px solid white;
`
const CheckBox = styled.input`
    &:hover{
        cursor: pointer;
    }
`
const Task = styled.h2`
    margin: 0 32px;
    font-weight: 600;
`
interface TaskProps {
    Tasks:{status:boolean,task: string}[]
}
  

function Table({Tasks}:TaskProps) {
    
    return(
        <Container>
            <RowH>
                <TittleStatus>Status</TittleStatus>
                <TittleTask>Tarefa</TittleTask>
            </RowH>
            <TableBody>
                {Tasks.map((item,index)=>(
                    <Row key={index}>
                        <CheckboxCont>
                            <CheckBox type="checkbox" checked={item.status}/>
                        </CheckboxCont>
                        <Task>{item.task}</Task>
                    </Row>
                ))}
            </TableBody>
        </Container>
    )
}



export default memo(Table);