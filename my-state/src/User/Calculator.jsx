import Button from "../components/Button";
import React from "react";
import Input from "../components/Input";

class Calculator extends React.Component {
     constructor(props) {
        super(props)
        this.state = {
            firstNum: 0,
            secondNum: 0,
            operator: null,
            total: '',
        }
     }

     calculator = (operator) => {
        switch(operator) {
            case "+": {
                this.setState({total: parseFloat(this.state.firstNum) + parseFloat(this.state.secondNum) })
                break;
            }
            case "-": {
                this.setState({total: parseFloat(this.state.firstNum) - parseFloat(this.state.secondNum) })
                break;
            }
            case "x": {
                this.setState({total: parseFloat(this.state.firstNum) * parseFloat(this.state.secondNum) })
                break;
            }
            case "/": {
                this.setState({total: parseFloat(this.state.firstNum) / parseFloat(this.state.secondNum) })
                break;
            }
            default:{this.setState({total:""})}
        }
     }
     render() {
        return (
            <div className="card p-2" style={{width: 200}}>
                <Input className="first" onChange={(e) => {this.setState({firstNum:e.target.value})}}/>
                <Input className="second" onChange={(e) => {this.setState({secondNum:e.target.value})}}/>
                <p>Result: <span>{this.state.total}</span></p>
                <div className="my_row" style={{justifyContent:"space-around"}}>
                    <Button onClick={(e) => {this.calculator("+")}} className="btn btn-info" value="+" />
                    <Button onClick={(e) => {this.calculator("-")}} className="btn btn-warning" value="-" />
                    <Button onClick={(e) => {this.calculator("x")}} className="btn btn-danger" value="x" />
                    <Button onClick={(e) => {this.calculator("/")}} className="btn btn-success" value="/" />
                </div>
            </div>
        )
     }
}
export default Calculator