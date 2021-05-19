import React, { memo } from 'react';
import { styled } from 'linaria/react';

import { HeaderTitle, HeaderSwitcher } from './components';
import { colors } from '../../colors';

export const Header = memo(() => {
  return (
    <Wrapper>
      <HeaderTitle />
      <HeaderSwitcher />
    </Wrapper>
  );
});

Header.displayName = 'Header';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 1em;

  justify-content: space-between;
  border: 2px solid ${colors.border};
  background: ${colors.background};
`;