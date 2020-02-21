 
import React from 'react';
import styles from './SearchResult.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';

class SearchResult extends React.Component {

    static propTypes = {
      cards: PropTypes.array,
      columns: PropTypes.array,
      lists:  PropTypes.array,
    }
      
  
    render() {
      const {cards} = this.props;
  
      return (
        <Container>
          <section className={styles.component} >
            <div className={styles.cards}>
              {cards.map(cardData => (
                <div key={cardData.id} className={styles.wrapper}>
                  <Card key={cardData.id} {...cardData} />
                </div>
              ))}
            </div>
          </section >
        </Container>
      );
    }
}
  
export default SearchResult;
  