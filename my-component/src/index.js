import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import'bootstrap/dist/css/bootstrap.min.css'

import Wellcome from './components/Welcome';

import AddComponent from './components/Add';

import Alert from './components/Alert';
import Student from './components/ListStudent';
import BMI from './components/BMI';

import Caculator from './components/Caculator';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Wellcome name = 'Admin'/> */}

    {/* <AddComponent firstNumber = {1} secondNumber = {2}/> */}
    
    {/* <Alert className = 'alert alert-primary' text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
    <Alert className = 'alert alert-warning' text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." /> */}

    {/* <Student/> */}

    {/* <BMI/> */}

    <Caculator/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
