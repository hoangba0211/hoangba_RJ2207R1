import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Calu from './User/Calcu';
import ChangeRbg from './User/ChangeRbg';
import Hidden from './User/Hidden';
import Login from './User/Login';
import Expand from './User/Expand';
import Student from './User/Student';
import Calculator from './User/Calculator';
import ToDoList from './User/ToDoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Calu/> */}
    {/* <ChangeRbg/> */}
    {/* <Hidden/> */}
    {/* <Login/> */}
    {/* <Expand/> */}
    {/* <Student/> */}
    {/* <Calculator/> */}
    <ToDoList/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const product = [
  {id:1, name: 'Iphone 10', price: '100.000đ', sold: 30, adress: 'Hà Nội'},
  {id:2, name: 'SamSung Note 10', price: '100.000đ', sold: 40, adress: 'Hồ Chí Minh'},
  {id:3, name: 'Remi Note 10', price: '100.000đ', sold: 50, adress: 'Hải Phòng'},
  {id:4, name: 'Iphone 14', price: '100.000đ', sold: 20, adress: 'Thanh Hóa'},
  {id:5, name: 'SammSung Note 20 plus', price: '100.000đ', sold: 10, adress: 'Hà Nội'},
  {id:6, name: 'Iphone 14 ProMax', price: '100.000đ', sold: 50, adress: 'Hà Nội'},
  {id:7, name: 'Xiomi Remi Note 20', price: '100.000đ', sold: 40, adress: 'Đà Nẵng'},
]
