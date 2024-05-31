import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenue/HeaderMenue";
import {MobileMenu} from "./mobileMenue/MobileMenue";

const items = ["Home", " Skills", "Works ", "Testimony", "Contact"]
export const Header = () => {
    return (
        <Styledheader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>

            </Container>
        </Styledheader>
    );
};


const Styledheader = styled.header`
    background-color: #1F1F20;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;


`



