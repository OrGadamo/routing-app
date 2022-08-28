import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router";
import { Header, Footer } from "./component/pages/index";
import Navbar from "./component/features/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
