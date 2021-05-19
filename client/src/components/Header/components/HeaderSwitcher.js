import React, { memo, useCallback } from 'react';
import { styled } from 'linaria/react';
import { useSensorsWSContext } from '../../../context/SensorsWS/SensorsWSContext';

export const HeaderSwitcher = memo(() => {
  const { isDisconnectedVisible, setIsDisconnectedVisible } =
    useSensorsWSContext();

  const handleToggle = useCallback(
    () => setIsDisconnectedVisible(!isDisconnectedVisible),
    [isDisconnectedVisible, setIsDisconnectedVisible],
  );

  return (
    <Wrapper>
      Show connected
      <Switch onClick={handleToggle}>
        <input type="checkbox" checked={isDisconnectedVisible} />
        <div></div>
      </Switch>
      Show all
    </Wrapper>
  );
});

HeaderSwitcher.displayName = 'HeaderSwitcher';

const Wrapper = styled.div`
  display: flex;
`;

const Switch = styled.div`
  margin: 0 1rem;

  & input {
    position: absolute;
    opacity: 0;
  }

  & {
    display: inline-block;
    font-size: 20px;
    height: 1em;
    width: 2em;
    background: #bdb9a6;
    border-radius: 1em;
  }

  & div {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    background: #fff;
    box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
    -webkit-transition: all 300ms;
    -moz-transition: all 300ms;
    transition: all 300ms;
  }

  & input:checked + div {
    -webkit-transform: translate3d(100%, 0, 0);
    -moz-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`;
