import { useState } from "react";
import styled from "styled-components";

const CheckboxContainer = styled.div`
    border-right: 2px solid white;
    width: 120px;
    height: 35px;
    padding-left: 5px;
    margin: 0px 4px;
    cursor: default;
   
    display: flex;
    align-items: center;
    justify-content: center;
`
const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
    overflow: hidden;
    white-space: nowrap;width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    cursor: default;
`
const StyledCheckbox = styled.label`
    cursor: pointer;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease;
    &:active{
      transform: scale(0.85);
    }
    div{
        background-color: #ffffff; 
        width: 11px;
        height: 11px;
        border-radius: 50%; 
    }
`


interface CheckBoxProps{
    isChecked : boolean,
}
export default function CheckBox({isChecked}:CheckBoxProps){
    const [checked, setChecked] = useState(isChecked);
   
    function handleCheckboxChange(){
        setChecked(!checked);
    }
    return(
        <>
            <CheckboxContainer>
                <HiddenCheckbox 
                    checked={checked}
                    onClick={handleCheckboxChange}
                    onChange={()=>{}}
                />
                <StyledCheckbox
                    onClick={handleCheckboxChange}
                >
                    <div style={{display: checked ? 'flex' : 'none'}} />
                </StyledCheckbox>
            </CheckboxContainer>  
        </>
    )
}