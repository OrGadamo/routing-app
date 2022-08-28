import { createContext, useEffect, useState } from "react";
import getDevicesApi from "../services/deviceAPI";
export const DeviceContext = createContext();
function DeviceProvider({ children }) {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    getDevicesApi().then((res) => setDevices(res));
  }, []);
  return (
    <DeviceContext.Provider value={{ devices, setDevices }}>
      {children}
    </DeviceContext.Provider>
  );
}
export default DeviceProvider;
