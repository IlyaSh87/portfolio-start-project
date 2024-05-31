import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {theme} from "../../../styles/Theme";
import {IconWrapper} from "../skills/skill/Skill";
import {Container} from "../../../components/Container";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={"quoutes"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: ${theme.colors.secondaryBg};

    ${IconWrapper} {
        margin: 40px 0 72px;
    }

`
