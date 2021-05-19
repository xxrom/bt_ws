import React, { useMemo, useEffect, useCallback, useState } from 'react';
import { w3cwebsocket } from 'websocket';

import { SensorsWSContext } from './SensorsWSContext';

const client = new w3cwebsocket('ws://127.0.0.1:5000');

export const SensorsWSProvider = ({ children }) => {
  const [sensorsMap, setSensorsMap] = useState({});
  const [sensorsIDs, setSensorsIDs] = useState([]);
  const [isDisconnectedVisible, setIsDisconnectedVisible] = useState(true);

  const updateSensorsMap = useCallback(
    (data) =>
      setSensorsMap((innerState) => ({
        ...innerState,
        [data.id]: {
          ...data,
        },
      })),
    [setSensorsMap],
  );

  useEffect(() => {
    // Sort by connected value (if required)
    const ids = Object.keys(sensorsMap).filter((id) =>
      isDisconnectedVisible ? true : sensorsMap[id].connected,
    );

    ids.sort();

    setSensorsIDs(ids);
  }, [sensorsMap, isDisconnectedVisible]);

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

    client.onclose = function () {
      console.warn('Client Closed');
    };
  }, [client, updateSensorsMap]);

  const handleToggleSwitch = useCallback(
    (id) => {
      const isCommandInvalid =
        !client ||
        !sensorsMap[id] ||
        typeof sensorsMap[id].connected !== 'boolean';

      if (isCommandInvalid) {
        return;
      }

      const command = sensorsMap[id].connected ? 'disconnect' : 'connect';

      client.send(
        JSON.stringify({
          command,
          id,
        }),
      );
    },
    [sensorsMap],
  );

  const value = useMemo(
    () => ({
      sensorsMap,
      sensorsIDs,
      handleToggleSwitch,
      isDisconnectedVisible,
      setIsDisconnectedVisible,
    }),
    [
      sensorsMap,
      sensorsIDs,
      setIsDisconnectedVisible,
      handleToggleSwitch,
      isDisconnectedVisible,
    ],
  );

  return (
    <SensorsWSContext.Provider value={value}>
      {children}
    </SensorsWSContext.Provider>
  );
};
