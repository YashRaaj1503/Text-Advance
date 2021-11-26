import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#282837'
      showAlert("DarkMode has been enabled", "success")
      document.title = 'TextUtil - Dark Mode'
      setTimeout(() => {
        document.title = 'TextUtil is Amazing Mode'
      }, 2000);
      setTimeout(() => {
        document.title = 'Install TextUtil Now'
      }, 1000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("LightMode has been enabled", "success")
      document.title = 'TextUtil - Light Mode'
    }

  }

  return (
    <>
      <Router>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
