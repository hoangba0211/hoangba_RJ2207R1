import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Home } from './Components/Login/HomePage';
import EmployeeDetail from './Components/Login/EmployeeDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/employee/:name' element={<EmployeeDetail/>}/>
        {/* <Route path='/employee/:' element={<EmployeeDetail/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
