import React, { memo } from 'react';
import { hot } from 'react-hot-loader/root';
import { styled } from 'linaria/react';

import { Header, Sensors } from './components';
import { SensorsWSProvider } from './context/SensorsWS/SensorsWSProvider';

const App = memo(() => (
  <MainWrapper>
    <SensorsWSProvider>
      <Header />
      <Sensors />
    </SensorsWSProvider>
  </MainWrapper>
));

App.displayName = 'App';

export default hot(App);

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100vw;
  flex: 1;
  box-sizing: bordre-box;
`;
