import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router";
import { Header, Footer, Navbar } from "./component/features/index";
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
