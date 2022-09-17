import { useEffect, useState } from "react"

export default function SelectCar() {
    const carList = ['BWM', 'Mercedes', 'Tetsla', 'Toyota']
    const colorList = ['blue', 'red', 'green', 'white', 'yellow', 'pink']
    const [selectCar, setSelectCar] = useState({car:carList[0],color:colorList[0]})
    const handleChange = (e) => {
        setSelectCar({...selectCar,[e.target.name]:e.target.value})
    }
    return (
        <div className="container">
            <h1>Select your car</h1>
            <div className="car">
                <label>Select a car</label>
                <select name="car" onChange={handleChange}>
                    {
                        carList.map((car, index) => {
                            return <option key={index} value={car}>{car}</option>
                        })
                    }
                </select>
            </div>
            <div className="color">
                <label>Select a color</label>
                <select name="color"  onChange={handleChange}>
                    {
                        colorList.map((color, index) => {
                            return <option key={index} value={color}>{color}</option>
                        })
                    }
                </select>
            </div>
            <h1>You selected a {selectCar.car} – {selectCar.color}</h1>
        </div>
    )
}