import React from "react";
import style from './Hero.scss'
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
    <header className={style.component}>
        <h2 className={style.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img className={style.image} src={props.image}/>
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.node.isRequired,
};

export default Hero;