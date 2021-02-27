import React from "react";
import style from './Hero.scss'

const Hero = () => (
    <header className={style.component}>
        <h2 className={style.title}>Things to do</h2>
        <img className={style.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"/>
    </header>
);

export default Hero;