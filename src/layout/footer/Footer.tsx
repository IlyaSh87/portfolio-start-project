import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'


const socialItemsData =[
    {
        iconId : "linkedin"
    },
    {
        iconId : "telegram"
    },
    {
        iconId : "instagram"
    },
    {
        iconId : "faceBook"
    },

]
export const Footer : React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Ilya</S.Name>
                <S.SocialList>
                    {socialItemsData.map((s,index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21"} width={"21"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2024 Ilya Shegurov, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

