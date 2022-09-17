import React from "react"
class Button extends React.Component {
    constructor(pops){
        super(pops)
    }
    addBtn() {
        let input = document.querySelector('#input').value;
        let listBtn = document.querySelector('.list__btn');
        listBtn.innerHTML += `<button>${input}</button><br>`;
        document.querySelector('#input').value = '';
    }
    render() {
        return (
            <>
                <div>
                    <input type="text" id="input" />
                    <button onClick={this.addBtn}>Click me</button>
                </div>
                <div className="list__btn"></div>
            </>   
        )
    }
}
export default Button