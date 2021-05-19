import React from 'react';

import { SensorsWSContext } from './SensorsWSContext';

export const SensorsWSProvider = ({ children }) => {
  const value = { sensorsMap: {} };

  return (
    <SensorsWSContext.Provider value={value}>
      {children}
    </SensorsWSContext.Provider>
  );
};
