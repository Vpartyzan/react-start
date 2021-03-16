import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  state = {
    value: this.props.match.params.searchString,
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.node,
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
  }

  componentDidMount() {
    this.props.changeSearchString(this.state.value);
  }  
  
  componentDidUpdate(prevProps, prevState){    
    if ( (this.props.match.params.searchString != prevState.value) && (prevProps.location.pathname.split('/')[1] == window.location.pathname.split('/')[1]) ) {
      this.setState({value: this.props.match.params.searchString});
      this.props.changeSearchString(this.state.value);           
    }
  }

  render() {
    const {title, icon, cards} = this.props;
    console.log('this.props', this.props); 

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        <div>
          {cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;