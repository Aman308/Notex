// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert  from './components/Alert';
import  Login  from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [alert ,setAlert] = useState(null)
  const showAlert = (message, severity) => {
    setAlert({
      msg: message,
      severity: severity,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <div className="container my-4">
    <Alert alert={alert}/>
    <Routes>
    <Route exact path="/" element={<Home showAlert={showAlert}/>} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
    <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
    </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
