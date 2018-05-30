import React from 'react';
import { storiesOf } from '@storybook/react';
import { Viewport } from '@storybook/addon-viewport';
import { action } from '@storybook/addon-actions';

import Menu from '../src/components/03_stateful/Menu';

storiesOf('03_stateful', module).add('Menu', () => {
  const menuList = ['ひとつ', '二番目', 'third'];
  return <Menu menuList={menuList} />;
});
