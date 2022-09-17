import React from "react";
import Heading1 from "../components/Heading_1";
import Button from "../components/Button";
import Lorem from "../components/Lorem";

class Expand extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isExpand: false,
        }
    }
    handle = () => {
        this.setState({
            isExpand: !this.state.isExpand,
        })
    }

    render() {
        let total;
        if(this.state.isExpand) {
            total = <Lorem className="lorem"/>
        }
        return (
            <div className="my_row" style={{flexDirection:"column"}}>
                <Heading1 className="heading" value="Conditional Rendering"/>
                <Button value={this.state.isExpand?"Đóng giới thiệu" : "Xem giới thiệu"} onClick={this.handle}/>
                {total}
            </div>
        )
    }
}
export default Expand