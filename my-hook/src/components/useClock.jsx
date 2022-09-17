import { useState } from "react";

export default function useClock() {
    const [time, setTime] = useState('');
    const [ampm, setAmPm] = useState('');

    const updateTime = () => {
        let dateNow = new Date();

        let hour = 0;
        if(dateNow.getHours() === 0 ){
            hour = 12
        }else if(dateNow.getHours() > 12){
            hour = dateNow.getHours() - 12
        }else {
            hour = dateNow.getHours()
        }

        let minutes =
            dateNow.getMinutes() < 10
                ? "0" + dateNow.getMinutes()
                : dateNow.getMinutes();
 
        let seconds =
            dateNow.getSeconds() < 10
                ? "0" + dateNow.getSeconds()
                : dateNow.getSeconds();

        let ampm = dateNow.getHours() >= 12 ? "PM" : "AM";
 
        setAmPm(ampm)
        setTime(`${hour} : ${minutes} : ${seconds}`);
    }
    setInterval(() => {
        updateTime();
    },1000);
    return [time, ampm]
}