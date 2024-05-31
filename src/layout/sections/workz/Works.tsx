import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

import {FlexWrapper} from "../../../components/FlexWrapper";
import socialImg from './../../../assets/icons/rectangle15.png'
import timerImg from './../../../assets/icons/Rectangle 14.png'
import {Work} from "./work/Work";

import {Container} from "../../../components/Container";
import {TabMenu} from "./tabmenu/TabMenu";

const worksItems = ["All", "landing page", "React ", "spa"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    <Work title={"Social Network"}
                          src={socialImg}
                          text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
                              "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
                              " Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
                    <Work title={"Timer"}
                          src={timerImg}
                          text={"orem ipsum dolor sit amet, consectetur adipisicing " +
                              "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim." +
                              "    Lorem ipsum dolor sit amet, " +
                              "consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim"}/>
                </FlexWrapper>

            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
   ${FlexWrapper}{
       gap: 30px;
   }
   

`
