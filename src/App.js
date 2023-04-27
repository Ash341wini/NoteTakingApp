
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/" element={<Login/>} />
            </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
