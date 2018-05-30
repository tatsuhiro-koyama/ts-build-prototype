import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';

import App from '../src/components/App';

storiesOf('App', module).add('default', () => <App />);
