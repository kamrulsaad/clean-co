import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { publicRoutes } from "./Routes/publicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component></Component>}></Route>)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
