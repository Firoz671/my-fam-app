import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import ToggleBtn from "./component/toggleBtn/ToggleBtn";
import FetchData from "./component/card/FetchData";

const fetchData = async () => {
  const res = await fetch("data.json");
  return res.json();
};

function App() {
  const [toggle, setToggle] = useState("All");
  const fetchPromise = fetchData();
  return (
    <div className="">
      <Navbar></Navbar>

      <ToggleBtn
        fetchPromise={fetchPromise}
        toggle={toggle}
        setToggle={setToggle}
      ></ToggleBtn>
      <Suspense fallback={<p className="text-center p-5">loading...</p>}>
        <FetchData
          fetchPromise={fetchPromise}
          toggle={toggle}
          setToggle={setToggle}
        ></FetchData>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
