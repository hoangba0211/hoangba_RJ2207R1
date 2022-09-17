import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [1,2,3,4],
            item: "",
            isStatus:true
        }
        
    }
    
    handlChange = (e) => {
        this.setState({item: e.target.value})

    }
    addItem = () => {
        const {list,item} = this.state
        if(!list.includes(item)) {
            list.unshift(item)
            this.setState({ list: [...list] })
        }
        // this.setState({list: list.sort((a,b) => b-a )})
    }
    delete = (e,index) =>{
        console.log(index);
        const {list} = this.state
        let removeItem = list.splice(index,1)
        console.log(30,removeItem);
        this.setState({
            list: list.filter((item) => {
                return item !== removeItem
            })
        })
    }
    edit = (e,index) => {
        const {list} = this.state
        this.setState({item: list[index],isStatus:!this.state.isStatus})
    }
    update = (e,index) => {
        this.setState({isStatus:!this.state.isStatus})
    }
    handlChangeItem = (e,index) => {
        const {list} = this.state
        list[index] = e.target.value
        this.setState({list: list})
    }
    render() {
        let button;
        let i;
            if(this.state.isStatus){
                button = <Button value="Add" className="btn_add" onClick={this.addItem} />
            }
            else {
                button = <Button value="Update" className="btn btn-success btn_update btn-sm m-2" onClick={(e) => {this.update(e,i)}} />
            }
        return (
            <div className="my_row" style={{ flexDirection: "column" }}>
                <h1>ToDo List</h1>
                <div className="form_add">
                    <Input className="input m-2" onChange={this.handlChange} value={this.state.item}/>
                    {button}
                </div>
                <table className="table table-striped list__items" style={{width:400}}>
                    <tbody>
                    {
                        this.state.list.map((item, index) => {
                            i = index
                            return (
                                <tr key={index} className="m-2">
                                    <th>{index + 1}</th>
                                    <td>{item}</td>
                                    <td className="item_func">                                        
                                        <Button  value="Edit" className="btn btn-info btn_edit btn-sm m-2" onClick={(e) => {this.edit(e,index)}} />
                                    </td>
                                    <td className="item_func">
                                        <Button  value="Delete" className="btn btn-danger btn_delete btn-sm m-2" onClick={(e) => {this.delete(e,index)}} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ToDoList