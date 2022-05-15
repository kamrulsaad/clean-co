import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { publicRoutes } from "./Routes/publicRoutes";


function App() {
  return (
    <div>
      <Navbar> 
        <Routes>
          {
            publicRoutes.map(({path, Component}, index ) => <Route key={index} path={path} element={<Component></Component>}></Route>)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
