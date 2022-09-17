import React from "react";
import Button from "../components/Button";
class Calu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }
    incearse = (e) =>  {this.setState({count: ++this.state.count})}
    decrease = (e) =>  {this.setState({count: --this.state.count})}
    render() {
        return (
            <div className="container">
                <Button className="increase" value="increase(+)" onClick={this.incearse} />
                <p>{this.state.count}</p>
                <Button className="decrease" value="decrease(-)" onClick={this.decrease} />
            </div>
        )
    }
}
export default Calu