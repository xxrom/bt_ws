import { useContext, createContext } from 'react';

export const SensorsWSContext = createContext({
  sensorsMap: {},
  sensorsIDs: [],
  handleToggleSwitch: () => {},
});

export const useSensorsWSContext = () => useContext(SensorsWSContext);
