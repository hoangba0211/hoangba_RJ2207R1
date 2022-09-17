import React from "react";
import Button from "../components/Button";
import Heading1 from "../components/Heading_1";

class Hidden extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }
    delete = () => {
        this.setState({ display: true })
    }

    render() {
        let comp;
        if (!this.state.display) {
            comp = <Heading1 class="h1" value="Hello Word!" />
        }
        return (
            <div className="row" style={{ flexDirection: "column" }}>
                {comp}
                <Button value="Delete the component" onClick={this.delete} />
            </div>

        )
    }
}
export default Hidden