import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {

    static propTypes = {
      title: PropTypes.string,
      key: PropTypes.number,
    }

    render() {
      const {title} = this.props;
      return (
        <section className={styles.component} key={this.props.key}>{title}</section>
      );
    }
}

export default Card;