import React from 'react';
import styles from './List.scss';

import Hero from '../Hero/Hero';
import Column from "../Column/Column";

import PropTypes from 'prop-types';

class List extends React.Component {
    static propsTypes = {
        title: PropTypes.node.isRequired,
        src: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title} src={this.props.src}/>
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column title="Animals"/>
                    <Column title="Plants"/>
                    <Column title="Minerals"/>
                </div>
            </section>
        )
    }
}

export default List;