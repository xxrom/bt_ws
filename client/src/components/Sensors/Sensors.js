import React, { memo } from 'react';
import { styled } from 'linaria/react';

import { useSensorsWSContext } from '../../context/SensorsWS/SensorsWSContext';
import { SensorInfo } from './components';

export const Sensors = memo(() => {
  const { sensorsMap, sensorsIDs } = useSensorsWSContext();

  return (
    <Wrapper>
      {sensorsIDs.map((id) => (
        <SensorInfo key={id} {...sensorsMap[id]} />
      ))}
    </Wrapper>
  );
});

Sensors.displayName = 'Sensors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
