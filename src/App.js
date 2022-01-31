import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {

  const changemode=()=>{
    if (mode==="light") {
      setmode("dark");
      setbtntext("Enable light mode");
      document.body.style.backgroundColor="rgb(1 1 35)";
      showalert("Dark mode is activated","Success!");

    }
    else{
      setmode("light");
      setbtntext("Enable Dark mode");
      document.body.style.backgroundColor="white";
      showalert("Light mode is activated","Success!");
    }
  }
  const showalert=(message,type)=>{
    setalert({
      message:message,
      type:type
    });
    setInterval(() => {
      setalert(null);
    }, 1500);
  }
  
  const [mode, setmode] = useState("light");
  const [btntext, setbtntext] = useState("Enable Dark mode");
  const [alert, setalert] = useState(null);
 
  return (
    <>
    {/* <Router> */}
   <Navbar title="TextUtils" mode={mode} change={changemode} btnchange={btntext} />
   <Alert alert={alert}/>
   <div className="container my-3" >
   {/* <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/"> */}
    <Textarea showalert={showalert} heading="Enter the text to analyze below" alert={alert} mode={mode}/>  
          {/* </Route>
        </Switch> */}
   </div>
   {/* </Router> */}
    </>
  );
}

export default App;
