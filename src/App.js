import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Services from "./Pages/Services";


function App() {
  return (
    <div>
      <Navbar> 
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
