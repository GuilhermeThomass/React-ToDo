import styled from "styled-components";
import { memo } from "react";

const Container = styled.table`
    display: flex;
    flex-direction: column;
    min-width: 75vh;
    background-color: #3d3d3d ;
    border-radius: 12px;
`
const TableHead = styled.th`
    margin: 24px 12px;
    gap: 48px;
    display: flex;
`
const TableBody = styled.td`
`
const Tittles = styled.h1`
    margin: 0;
    font-size: 2em;
`


interface TableProps{

}

function Table({}:TableProps) {
    return(
        <Container>

        </Container>
    )
}



export default memo(Table);