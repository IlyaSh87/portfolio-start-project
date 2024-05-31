import React from 'react';
import styled from "styled-components";

import {Link} from "../../../../components/Link";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {/*probezimsya mapom*/}
                {props.menuItems.map((item: string, index: number) => (
                        <ListItem key={index}>
                            <Link href=" ">{item}</Link>
                        </ListItem>
                    )
                )}

            </ul>
        </StyledHeaderMenu>
    );
}

const StyledHeaderMenu = styled.nav`
    

    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 1px solid green;
        margin:0 auto 40px;
    }

`
const ListItem = styled.li`
   

`
