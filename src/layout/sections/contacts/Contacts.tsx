import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles'

export const Contact : React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"name"}/>
                    <S.Field placeholder={"subject"}/>
                    <S.Field as={"textarea"} placeholder={"message"}/>
                    <StyledButton type={"submit"}>Send message</StyledButton>
                </S.Form>
            </Container>
        </S.Contact>
    );
};




