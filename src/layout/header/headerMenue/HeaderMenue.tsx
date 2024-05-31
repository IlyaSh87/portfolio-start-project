import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {/*probezimsya mapom*/}
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link href=" ">{item}
                            <Mask>
                                <span>{item}</span>

                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>


                        </Link>
                    </ListItem>
                })}

            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        width: fit-content;
        margin: 0 auto;
        display: flex;
        gap: 30px;
    }
    
    @media ${theme.media.tablet}{
        display: none;
    }
        
    


`
const Link = styled.a`
    font-family: Josefin Sans, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 55px;
    text-align: center;
    color: transparent;
    


`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    //outline: 1px solid red;
    color: ${theme.colors.accent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }

`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 2.94px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform:  translateX(5px);
            color: ${theme.colors.font};

            & + ${Mask} {
                transform:  translateX(-5px);
            }
        }

    }

`



