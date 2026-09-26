import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route, Navigate, useParams } from "react-router-dom";

import Home from "./Screens/Home/Home";
import WebD from "./Screens/WebD/WebD";
import AppD from "./Screens/AppD/AppD";
import MLS from "./Screens/MLS/MLS";
import DesignS from "./Screens/DesignS/DesignS";
import Footer from "./Components/Footer/Footer";

// These pages used to live under /work; keep old links working.
function WorkRedirect() {
  const { area } = useParams();
  return <Navigate to={`/explore/${area}`} replace />;
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/explore/WebDevelopment" element={<WebD />}></Route>
        <Route path="/explore/AppDevelopment" element={<AppD />}></Route>
        <Route path="/explore/MachineLearning" element={<MLS />}></Route>
        <Route path="/explore/UIUXDesign" element={<DesignS />}></Route>
        <Route path="/work/:area" element={<WorkRedirect />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
