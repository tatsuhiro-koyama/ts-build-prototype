import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';

import Footer from '../src/components/01_stateless/Footer';
import MainImage from '../src/components/01_stateless/MainImage';

storiesOf('01_stateless', module)
  .add('Footer', () => <Footer />)
  .add('MainImage', () => <MainImage />);
