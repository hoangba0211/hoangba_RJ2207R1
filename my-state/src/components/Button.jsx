import React from "react"

class Button extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <>
            <button key={this.props.key} id = {this.props.id} className={this.props.className} onClick={this.props.onClick}>{this.props.value}</button>
        </>
        )
    }
}
export default Button