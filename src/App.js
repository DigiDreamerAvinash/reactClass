//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfrom from './components/TextFrom';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  // let site ={
  //   title: "New Site",
  //   about: "Company Profile"
  // } // Company Object 

  const [mode, updateMode] = useState ('light');

  const [alert, updateAlert] = useState (null);

  const viewAlert= (message, type)=>{
      updateAlert({
        msg:message,
        typ:type
      })
      setTimeout(()=>{
        viewAlert (null);
      },2000);
  }

  // const removeBgColor = ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  // }

  const changeMode = (color)=>{
    // removeBgColor();
    // console.log(color);
    // document.body.classList.add('bg-'+color);
    if(mode === 'light'){
      updateMode('dark');
      document.body.style.backgroundColor='#444444';
      
      setTimeout(()=>{
        document.title = "App - Light mode";
      },1000);
      viewAlert("Dark mode enabled", "success");
    }
    else{
      updateMode('light');
      document.body.style.backgroundColor="white";
      setTimeout(()=>{
        document.title = "App - Light mode";
      },1000);
      viewAlert("Light mode enabled", "success");
    }
  }
  return (
    
    <>
    <Router>
      <Navbar title="New Site" aboutNav="About Us" mode={mode} changeMode={changeMode}/> 
      <Alert alert={alert} />
      {/* // Site name// */}
      <div className='container'>
       
        <Routes >
            <Route exact path="/about" element={ <About mode={mode}/>}> </Route>

            <Route exact path="/" element={<Textfrom viewAlert={viewAlert} label="Modify Content" mode={mode}/>}></Route>
        </Routes>
      </div>
      </Router>
      </>

  );
}

export default App;
