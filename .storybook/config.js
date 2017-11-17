import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import 'babel-polyfill';
import configureStyle from '../src/styles/configureStyles';

configureStyle();

setAddon(infoAddon);

const StyledSiteBackground = SiteBackground.extend`
  min-height: 100vh;
`;

const RouterDecorator = (story) => (
  <StyledSiteBackground>
    <Container>
      {story()}
    </Container>
  </StyledSiteBackground>
);

const req = require.context('../src/', true, /story\.js$/);

function loadStories() {
  addDecorator(RouterDecorator);
  req.keys().forEach(req)
}


configure(loadStories, module);
