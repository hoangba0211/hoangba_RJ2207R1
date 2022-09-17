import React from "react";

class Alert extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div class="alert alert-warning" role="alert">
                {
                  this.props.text
                }
            </div>
        )
    }
}


export default Alert