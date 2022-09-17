import React from "react";

class Paragraph extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <p 
                className={this.props.className}
                title={this.props.title}          
            >{this.props.value}</p>
        )
    }
    
}
export default Paragraph