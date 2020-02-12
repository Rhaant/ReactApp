import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

    static propTypes = {
        title: PropTypes.string,
        key: PropTypes.number,
      }

    render() {
        return (
          <section className={styles.component} key={this.props.key}>{this.props.title}</section>
        )
      }
}

export default Card