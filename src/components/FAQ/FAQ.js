import React from 'react';
import {settings} from '../../data/dataStore';

import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const FAQ = () => (
  <Container>
    <Hero titleText={settings.faq.title} image={settings.faq.image}/>
    {settings.faq.text}
  </Container>
);

export default FAQ;