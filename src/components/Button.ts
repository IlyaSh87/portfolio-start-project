import styled from "styled-components";
import {theme} from "../styles/Theme";

export const StyledButton = styled.button`
   
    font-size: 14px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 170px;
    height: 32px;
    position: relative;
    z-index: 0;
    background-color: transparent;
    
    &:hover{
        &::before{
            height: 100%;
            width: 100%;
            
        }
    }
    
    
    
    &::before{
        content: "";
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${theme.colors.accent};
        transition: ${theme.animations.transition};
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%);
    }
    


`