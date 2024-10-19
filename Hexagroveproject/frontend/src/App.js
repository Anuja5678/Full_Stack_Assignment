import './App.css';
import EDU from './components/EDU';
import Leftbar from './components/Leftbar';
import Midbar from './components/Midbar';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Socio from './components/Socio';

function App() {
  return (
    <Router>
      <div className='fullwork'>
        <Navbar/>
        <Leftbar/>
        <Rightbar/>
        <Midbar/>
        <Routes>
          <Route path='/' element={<Midbar/>} />
          <Route path='/EDU-pro' element={<EDU/>} />
          <Route path='/socio' element={<Socio/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
