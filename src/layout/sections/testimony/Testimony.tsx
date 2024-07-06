import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {theme} from "../../../styles/Theme";
import {S} from '../skills/Skills_Styles'
import {Container} from "../../../components/Container";

export const Testimony : React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <S.IconWrapper>
                        <Icon iconId={"quoutes"}/>
                    </S.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: ${theme.colors.secondaryBg};
    position: relative;

    ${S.IconWrapper} {
        margin: 40px 0 72px;
    }

`
