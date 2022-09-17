import React from "react";
class Heading1 extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <h1 className= {this.props.className}>{this.props.value}</h1>
    }
        
}
export default Heading1