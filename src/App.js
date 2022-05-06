import "./App.css";
import Navbar from "./Pages/Navbar.js";
import HomePage from "./Pages/Homepage";
import AddData from "./Pages/PagesAddData";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/add" element={<AddData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
