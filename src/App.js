
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Forgot from './components/Forgot';
import VerifyOTP from './components/VerifyOTP';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/" element={<Login/>} />
              <Route path="/forgot" element={<Forgot/>} />
              <Route path="/sentOTP" element={<VerifyOTP/>} />
              
            </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
