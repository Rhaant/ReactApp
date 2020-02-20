import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class Header extends React.Component {

static propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,

}

render() {
  return(
    <header className = {styles.component}>
      <Container>
        <div className={styles.wrapper}>
          <Link className={styles.logo} to = '/'>
            <Icon name = {settings.HeaderIcon}/>
          </Link>
          <nav>
            <NavLink exact to='/' activeClassName='active'>Home</NavLink>
            <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
            <NavLink exact to='/faq' activeClassName='active'>faq</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}
}

export default Header;