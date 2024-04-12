import "./App.css";
import { Head } from "./components/Head/Head";
import { NavBar } from "./components/NavBar/NavBar";
import { Foot } from "./components/Foot/Foot";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Head />
      <NavBar />
      <Outlet />
      <Foot />
    </>
  );
}

export default App;
