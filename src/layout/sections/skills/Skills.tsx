import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles'
import { Fade } from "react-awesome-reveal";


const skillData = [
    {
        iconId: "codeHtml",
        title: "html5",
        description: "lorem ipsumloremlorem ipsumlorem ipsumlorem ipsum" +
            "lorem ipsumlorem ipsumlorem ipsumipsum ipsumlorem ipsum",

    },
    {
        iconId: "css",
        title: "css3",
        description: "lorem ipsumloremlorem ipsumlorem ipsumlorem ipsum" +
            "lorem ipsumlorem ipsumlorem ipsumipsum ipsumlorem ipsum",

    },
    {
        iconId: "react",
        title: "React",
        description: "lorem ipsumloremlorem ipsumlorem ipsumlorem ipsum" +
            "lorem ipsumlorem ipsumlorem ipsumipsum ipsumlorem ipsum",

    },
    {
        iconId: "styledComponents",
        title: "styled components",
        description: "lorem ipsumloremlorem ipsumlorem ipsumlorem ipsum" +
            "lorem ipsumlorem ipsumlorem ipsumipsum ipsumlorem ipsum",

    },
    {
        iconId: "typeScript",
        title: "typeScript",
        description: "lorem ipsumloremlorem ipsumlorem ipsumlorem ipsum" +
            "lorem ipsumlorem ipsumlorem ipsumipsum ipsumlorem ipsum",

    },
    {
        iconId: "codeHtml",
        title: "html5",
        description: "lorem ipsumloremlorem ipsumlorem ipsumlorem ipsum" +
            "lorem ipsumlorem ipsumlorem ipsumipsum ipsumlorem ipsum",

    },



]


export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.2}>
                    {skillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>
                    })}
                    </Fade>

                </FlexWrapper>
            </Container>

        </S.Skills>
    );
};

