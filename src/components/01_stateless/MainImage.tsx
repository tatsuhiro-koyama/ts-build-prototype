import * as React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  background-image: url(./images/P_20161211_175647.jpg);
  background-size: cover;
  background-position: center;
`;

const MainImage: React.SFC<{}> = () => <Section />;

export default MainImage;
