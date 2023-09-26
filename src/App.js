import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './Pages/About';
import './App.css';
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
