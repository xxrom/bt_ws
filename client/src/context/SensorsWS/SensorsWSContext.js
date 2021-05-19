import { useContext, createContext } from 'react';

export const SensorsWSContext = createContext({
  sensorsMap: {},
});

export const useSensorsWSContext = () => useContext(SensorsWSContext);
