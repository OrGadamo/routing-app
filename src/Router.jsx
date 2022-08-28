import { Routes, Route } from "react-router-dom";
import {
  About,
  Home,
  Contact,
  Phones,
  PageNotFound,
} from "./component/pages/index";
import DeviceProvider from "./contexts/DeviceContext";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route
        path="Phones"
        element={
          <DeviceProvider>
            <Phones />
          </DeviceProvider>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
