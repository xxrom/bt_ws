import React, { useMemo, useEffect, useCallback, useState } from 'react';
import { w3cwebsocket } from 'websocket';

import { SensorsWSContext } from './SensorsWSContext';

const client = new w3cwebsocket('ws://127.0.0.1:5000');

export const SensorsWSProvider = ({ children }) => {
  const [sensorsMap, setSensorsMap] = useState({});

  const updateSensorsMap = useCallback((data) => {
    const { id, name, connected, unit, value } = data;

    setSensorsMap((innerState) => ({
      ...innerState,
      [id]: {
        name,
        connected,
        unit,
        value,
      },
    }));
  }, []);

  useEffect(() => {
    client.onopen = () => {
      console.warn('WebSocket Client Connected');
    };

    client.onmessage = (message) => {
      const data = JSON.parse(message.data);
      console.warn(message, data);

      if (data) {
        // If data exists - update sensorsMap
        updateSensorsMap(data);
      }
    };
  }, []);

  const value = useMemo(() => ({ sensorsMap }), [sensorsMap]);

  return (
    <SensorsWSContext.Provider value={value}>
      {children}
    </SensorsWSContext.Provider>
  );
};
