import { useState } from "react";
import "./App.css";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import ToggleBtn from "./component/toggleBtn/ToggleBtn";

function App() {
  const [toggle, setToggle] = useState("All");
  return (
    <div className="">
      <Navbar></Navbar>
      <Hero></Hero>
      <ToggleBtn toggle={toggle} setToggle={setToggle}></ToggleBtn>
      <Footer></Footer>
    </div>
  );
}

export default App;
