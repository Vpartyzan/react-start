import React from 'react';
import {settings} from '../../data/dataStore';

import Container from '../Container/Container';
import Hero from '../Hero/Hero';

const Info = () => (
  <Container>
    <Hero titleText={settings.info.title} image={settings.info.image}/>
    {settings.info.text}
  </Container>
);

export default Info;