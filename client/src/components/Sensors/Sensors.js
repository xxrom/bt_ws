import React from 'react';
import { styled } from 'linaria/react';

import { useSensorsWSContext } from '../../context/SensorsWS/SensorsWSContext';

export const Sensors = () => {
  const { sensorsMap } = useSensorsWSContext();
  console.warn('sensorsMap', sensorsMap);

  return <Wrapper>Sensons block</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  border: 1px solid red;
`;
