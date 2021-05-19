import { useContext, createContext } from 'react';

const noop = () => {};

export const SensorsWSContext = createContext({
  sensorsMap: {},
  sensorsIDs: [],
  handleToggleSwitch: noop,
  isDisconnectedVisible: true,
  setIsDisconnectedVisible: noop,
});

export const useSensorsWSContext = () => useContext(SensorsWSContext);
