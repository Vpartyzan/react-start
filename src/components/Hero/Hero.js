import React from "react";
import style from './Hero.scss'
import PropTypes from 'prop-types';

const Hero = props => (
    <header className={style.component}>
        <h2 className={style.title}>{props.titleText}</h2>
        <img className={style.image} src={props.src}/>
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    src: PropTypes.string.isRequired,
};

export default Hero;