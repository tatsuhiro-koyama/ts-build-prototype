import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';

import ItemList from '../src/components/04_stateful-lifecycle/ItemList';

storiesOf('04_stateful-lifecycle', module).add('ItemList', () => {
  return <ItemList />;
});
