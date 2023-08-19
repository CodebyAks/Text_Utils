import React from 'react';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Formarea1 from './Components/Formarea1';
import Navbar1 from './Components/Navbar1';
import Alert from './Components/Alert';
// import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Formarea from './Components/Formarea';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const togglebutton = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Now You Are Suffering On Dark Mode", "success")
      document.title = "Switch to Dark Mode"

      setTimeout(() => {
        document.title = "TextUtiles - Home"

      }, 2000)
      //  setInterval(()=>{
      //    document.title = "Dark Mode is on"
      //   },2000)
      //   setInterval(()=>{
      //   },2000)
    }
    else {

      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Is Off", "success");
      document.title = "Switch to light Mode"

      setTimeout(() => {
        document.title = "TextUtiles - Home"

      }, 2000);

    }
  }
  return (
    <>
    {/* <BrowserRouter> */}

      <Navbar1 raja="Description" title="TextEditior" mode={mode} togglebutton={togglebutton} />
      <Alert alert={alert} />

       <div className="conatainer">
      <Formarea1 mode={mode} alert={alert} showAlert={showAlert} />
       </div>

      {/* <Navbar/> */}
      {/* <Formarea1 mode={mode} alert={alert} showAlert={showAlert} /> */}

      {/* <About /> */}

       {/* <Routes> */}
     
        {/* <Route exact path="/formarea" element={<Formarea1 mode={mode} alert={alert} showAlert={showAlert} />} /> */}

        {/* <Route path="/about" element={<About />} /> */}


      {/* </Routes>  */}
      
    {/* </BrowserRouter> */}




     
    </>
  )
}

export default App;
