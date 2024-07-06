import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import{S} from '../headerMenue_Styles'


export const MobileMenu : React.FC= () => {
    const  [menuIsopen, setmenuIsopen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsopen(!menuIsopen)}
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsopen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuePopup isOpen={menuIsopen} onClick={()=>{setmenuIsopen(false)}}>
                <Menu/>
            </S.MobileMenuePopup>

        </S.MobileMenu>
    );
};








