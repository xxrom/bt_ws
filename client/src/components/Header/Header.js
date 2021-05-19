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
  margin: 2rem 2rem 0;

  justify-content: space-between;
  border: 1px solid ${colors.border};
  background: ${colors.background};
`;
