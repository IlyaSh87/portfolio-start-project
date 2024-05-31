import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {StyledButton} from "../Button";
import {Container} from "../Container";
import {theme} from "../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <StyledField placeholder={"name"}/>
                    <StyledField placeholder={"subject"}/>
                    <StyledField as={"textarea"} placeholder={"message"}/>
                    <StyledButton type={"submit"}>Send message</StyledButton>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`



`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea{
        resize: none;
        height: 155px;
    }


`

const StyledField = styled.input`
    width: 100%;
    background-color:${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
    padding: 7px 15px;

    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    
    &::placeholder{
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }
    &:focus-visible{
        outline: 1px solid ${theme.colors.borderColor};
    }
    



`



