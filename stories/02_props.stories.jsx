import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';

import Header from '../src/components/02_props/Header';

storiesOf('02_props', module).add('Header', () => (
  <Header title="タイトル設定" />
));
