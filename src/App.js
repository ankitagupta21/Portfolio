import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Screens/Home/Home";
import WebD from "./Screens/WebD";

function App() {
  return (
    <div class="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/work/WebDevelopment" element={<WebD />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
