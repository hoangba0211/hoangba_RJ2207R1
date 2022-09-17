import React from "react";

class ChangeRbg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // color: "#34A2B9",
            color: "red",
        }
    }
getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};
getRandomString = () => {
    let result = "";
    const baseString = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++) {
      const randomIndex = this.getRandomInt(0, baseString.length);
      result += baseString[randomIndex];
    }
    return `#${result}`;
}
componentDidMount() {
    setInterval(() => {
        this.setState({
            color: this.getRandomString()
            // color: 'blue'
        })
    },1000)
}

render() {
    return (
        <div
            className="container"
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className="content"
                style={{
                    width: 500,
                    height: 500,
                    backgroundColor:this.state.color
                }}
            >

            </div>
        </div>
    )
}
}
export default ChangeRbg