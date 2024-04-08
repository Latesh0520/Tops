import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FunComp from "./component/FunCompo";
import MainLayout from "./DesignLayouts/MainLayout";
import Info from "./Info/Info";
import Home from "./TemplatePages/Home";
import ClassState from "./useState/ClassState";
import UseState from "./useState/UseState";
import StateProject from "./useState/useStateProject/StateProject";
import LifeCycle from "./LifeCycles/LifeCycle";
import Hooks from "./Hooks/Hooks";
import Task from "./task/Task";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <FunComp />  */}
      {/* <MainLayout/> */}
      {/* <Info/> */}
      {/* <Home /> */}
      {/* <UseState/> */}
      {/* <StateProject/> */}
      {/* <LifeCycle/> */}
      {/* <Hooks/> */}
      <Task/>
    </div>
  );
}

export default App;
