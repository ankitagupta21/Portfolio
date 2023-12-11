import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home/Home";
import WebD from "./Screens/WebD/WebD";
import AppD from "./Screens/AppD/AppD";
import MLS from "./Screens/MLS/MLS";
import DesignS from "./Screens/DesignS/DesignS";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div class="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/work/WebDevelopment" element={<WebD />}></Route>
        <Route path="/work/AppDevelopment" element={<AppD />}></Route>
        <Route path="/work/MachineLearning" element={<MLS />}></Route>
        <Route path="/work/UIUXDesign" element={<DesignS />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
