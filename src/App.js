import Form from "./components/Form";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Casestudies from "./components/Casestudies";
import Optimize from "./components/Optimize";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/case-studies" element={<Casestudies />} />
        <Route  path="/albinism-detector" element={<Form />} />
        <Route  path="/optimize" element={<Optimize />} />
      </Routes>
    </div>
  );
};

export default App;
