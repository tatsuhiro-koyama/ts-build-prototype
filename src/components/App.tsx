import * as React from 'react';
import styled from 'styled-components';
import DevTools from 'mobx-react-devtools';
import Header from './02_props/Header';
import Footer from './01_stateless/Footer';
import MainImage from './01_stateless/MainImage';
import Menu from './03_stateful/Menu';
import ItemList from './04_stateful-lifecycle/ItemList';

const Section = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  padding: 64px 0 54px;
`;

const App: React.SFC<{}> = props => {
  const menuList = ['サンプル１', 'サンプル２', 'さんぷる３'];
  return (
    <Section>
      <MainImage />
      <ItemList />
      <Header title="サンプルプロジェクト" />
      <Footer />
      <DevTools />
      <Menu menuList={menuList} />
    </Section>
  );
};

export default App;
