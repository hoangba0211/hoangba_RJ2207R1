import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './User/Counter';
import EffectDemo from './User/EffectDemo';
import ChangeTitle from './User/ChangeTitle';
import MyClock from './User/MyClock';
import SelectCar from './User/SelectCar';
import Timer from './components/Timer';
import Counter2 from './User/Counter2';
import TestHooks from './User/test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter/> */}
    {/* <EffectDemo/> */}
    {/* <ChangeTitle/> */}
    {/* <MyClock/> */}
    {/* <SelectCar/> */}
    {/* <Timer/> */}
    {/* <Counter2/> */}
    <TestHooks/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
