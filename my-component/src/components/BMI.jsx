import React from "react";
import Input from "./Input"
class BMI extends React.Component {
    constructor(props) {
        super(props)
    }
    caculator() {
        const height = document.querySelector('.height').value;
        const weight = document.querySelector('.weight').value;
        const total = document.querySelector('.total');
        let result =  weight/ (height * height) * 10000

        total.innerHTML = result
    }
    render() {
        return (
            <div className="container">
                <h1>BMI Caculator</h1>

                <div className="content">
                    <Input content = "Height" type = "text" className = "height" placeholder = "Nhập chiều cao"/>
                    <Input content = "Weight" type = "text" className = "weight" placeholder = "Nhập cân nặng"/>
                </div>

                <div className="result">
                    <p>Your BMI is <span className="total"></span></p>
                </div>

                <div className="btn">
                    <button onClick={this.caculator}>Caculator</button>
                </div>
            </div>
        )
    }
}

export default BMI