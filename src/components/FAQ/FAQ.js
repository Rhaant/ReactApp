import React from 'react';
import Hero from '../Hero/Hero.js';
import {DataFaq} from '../../data/dataStore.js';
import Container from '../Container/Container';

class FAQ extends React.Component {

  render() {

    return (
      <Container>
        <main>
          <Hero image={DataFaq.image} titleText = {DataFaq.title} />
          <h1>{DataFaq.pageContent}</h1>
        </main>
      </Container>

    );
  }
}

export default FAQ;