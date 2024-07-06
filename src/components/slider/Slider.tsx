import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './.././../styles/slider.css'
 import {S} from  './Slyder_styles'

type SlidePropsType = {
     text: string,
     userName: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>
                {props.text}
            </S.Text>
            <S.Name>@{props.userName}</S.Name>

        </S.Slide>
    )
}
const items = [
    <Slide userName={"ivan ivanow"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed"} />,
    <Slide userName={"oleg green"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed"} />,
    <Slide userName={"elena pokerface"}
           text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed"} />


];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}

        />
    </S.Slider>

);

