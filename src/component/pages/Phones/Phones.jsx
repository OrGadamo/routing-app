import "./Phones.css";
import { useContext } from "react";
import { DeviceContext } from "../../../contexts/DeviceContext";
import DeviceCard from "../../features/DeviceCard/DeviceCard";
function Phones() {
  const { devices, setDevices } = useContext(DeviceContext);
  console.log(devices, setDevices);
  return (
    <div className="phones">
      <h1>Phones</h1>
      <div id="card_con">
        {devices?.map((device) => (
          <DeviceCard
            brand={device.brand}
            color={device.color}
            date={device.createdAt}
            isAvailable={device.isAvailable}
            price={device.price}
            ram={device.ram}
          />
        ))}
      </div>
    </div>
  );
}

export default Phones;
