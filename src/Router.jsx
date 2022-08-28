import { Routes, Route } from "react-router-dom";
import {
  About,
  Home,
  Contact,
  Phones,
  PageNotFound,
  Movies,
  MoviesDetails,
} from "./component/pages/index";
import DeviceProvider from "./contexts/DeviceContext";
import MoviesProvider from "./contexts/MoviesContext";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route
        path="moviesdetails"
        element={
          <MoviesProvider>
            <MoviesDetails />
          </MoviesProvider>
        }
      />
      <Route
        path="Movies"
        element={
          <MoviesProvider>
            <Movies />
          </MoviesProvider>
        }
      />
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
