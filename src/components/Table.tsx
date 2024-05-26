import styled from "styled-components";
import { memo } from "react";

const Container = styled.table`
    display: flex;
    flex-direction: column;
    background-color: #3d3d3d ;
    border-radius: 12px;
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