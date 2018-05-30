import * as React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  height: 64px;
  background-color: black;
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Titletext = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 24px;
  margin: 0;
`;

const Header: React.SFC<{ title: string }> = props => {
  return (
    <Section>
      <Titletext>{props.title}</Titletext>
    </Section>
  );
};

export default Header;
