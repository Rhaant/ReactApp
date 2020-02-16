import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js'; 
import {settings} from '../../data/dataStore.js';
// import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }


    static propTypes = {
      title: PropTypes.string,
      key: PropTypes.number,
      cards: PropTypes.array,
      icon: PropTypes.node,
      action: PropTypes.func,
      addCard: PropTypes.func,
    }


    render() {
      const{title, icon, cards, addCard} = this.props;

      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            {title}
            <span className={styles.icon}><Icon name={icon}/></span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard}/>
          </div>
        </section>
      );
    }
}

export default Column;
