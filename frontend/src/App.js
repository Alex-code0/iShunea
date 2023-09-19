import './App.css';

import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Career from "./Components/Career";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/career" element={<Career/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
