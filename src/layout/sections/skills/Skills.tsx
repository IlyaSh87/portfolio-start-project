import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"codeHtml"}
                           title={"html5"}
                           description={"lorem ipsumloremlorem ipsumlorem ipsumlorem ipsum" +
                               "lorem ipsumlorem ipsumlorem ipsumipsum ipsumlorem ipsum"}/>
                    <Skill iconId={"css"}
                           title={"css3"}
                           description={"lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum" +
                               "lorem ipsumlorem ipsumlorem ipsumipsumipsumlorem ipsum"}/>
                    <Skill iconId={"react"}
                           title={"React"}
                           description={"lorem ipsumlorem ipsumlorem " +
                               "lorem ipsumlorem ipsumlorem ipsum" +
                               "lorem ipsumlorem ipsumlorem ipsumipsum"}/>
                    <Skill iconId={"styledComponents"}
                           title={"styled components"}
                           description={"lorem ipsumloremlorem ipsumlorem ipsumlorem ipsum" +
                               "lorem ipsumlorem ipsumlorem ipsumipsum ipsumlorem ipsum"}/>
                    <Skill iconId={"typeScript"}
                           title={"typescript"}
                           description={"lorem ipsumlorem lorem ipsumlorem ipsumlorem ipsum" +
                               "lorem ipsumlorem ipsumlorem ipsumipsumipsumlorem ipsum"}/>
                    <Skill iconId={"webDesign"}
                           title={"WEB DESIgN  "}
                           description={"lorem ipsumlorem ipsumlorem " +
                               "lorem ipsumlorem ipsumlorem ipsum" +
                               "lorem ipsumlorem ipsumlorem ipsumipsum"}/>
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`

    @media ${theme.media.mobile}{
        padding: 80px 0;
    }
`