import React from 'react';
import { styled } from 'linaria/react';
import { colors } from '../../../colors';

export const SensorInfo = ({ name, value, unit, connected }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Info>{`${value} ${unit}`}</Info>
      <Button>{connected ? 'Disconnect' : 'Connect'}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-basis: calc(30% - 4rem);
  flex-direction: column;
  flex-grow: 1;
  padding-top: 2rem;
  border: 1px solid ${colors.border};
  box-sizing: border-box;
  margin: 2rem 2rem 0;
`;

const Name = styled.div`
  text-align: center;
  border: 1px solid ${colors.border};
  background: ${colors.background};
  margin: 0 2rem 1rem;
`;

const Info = styled(Name)``;

const Button = styled.button`
  height: 2rem;
  border: 1px solid ${colors.border};
  background: ${colors.background};
  cursor: pointer;
`;
