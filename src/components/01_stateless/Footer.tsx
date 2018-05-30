import * as React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  height: 54px;
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Copylight = styled.span`
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin: 0;
`;

export default class Footer extends React.Component<{}> {
  public render() {
    return (
      <Section>
        <Copylight>copylight</Copylight>
      </Section>
    );
  }
}
