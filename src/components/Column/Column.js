import React from "react";
import style from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
    }

    render() {
        return (
            <section className={style.component}>
                <h3 className={style.title}>{this.props.title}</h3>
            </section>
        )
    }
}

export default Column;