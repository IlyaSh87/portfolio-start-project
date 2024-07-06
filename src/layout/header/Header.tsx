import React from 'react';

import {Logo} from "../../components/logo/Logo";

import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

import {MobileMenu} from "./headerMenue/mobileMenue/MobileMenue";
import{S} from './Header_Styles'
import {DesctopMenu} from "./headerMenue/desctopMenue/DesctopMenue";


export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu/>
                                        :<DesctopMenu/>}


                </FlexWrapper>

            </Container>
        </S.Header>
    );
};





