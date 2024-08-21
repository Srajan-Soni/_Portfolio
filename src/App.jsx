import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <>
      <div>
      <NextUIProvider>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
        <Footer />
        </NextUIProvider>
      </div>
      <Toaster />
      
    </>
  );
}

export default App;
