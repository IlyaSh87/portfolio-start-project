import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {S} from './Contacts_Styles'
import emailjs from '@emailjs/browser';

export const Contact : React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_17065oh', 'template_qtymryf', form.current, {
                publicKey: '-m2Flbnyb_TA1sH-Z',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <S.Contact id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form  ref={form} onSubmit={sendEmail}>
                    <S.Field placeholder={"name"} name={'user_name'}/>
                    <S.Field placeholder={"email"} name={'email'}/>
                    <S.Field placeholder={"subject"} name={'subject'}/>
                    <S.Field as={"textarea"} placeholder={"message"} name={'message'}/>
                    <StyledButton type={"submit"}>Send message</StyledButton>
                </S.Form>
            </Container>
        </S.Contact>
    );
};




