import { useContext, createContext } from 'react';

export const SensorsWSContext = createContext({
  sensorsMap: {},
  sensorsIDs: [],
});

export const useSensorsWSContext = () => useContext(SensorsWSContext);
