import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Head } from "./components/Head/Head";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Head />
      <NavBar />
    </>
  );
}

export default App;
