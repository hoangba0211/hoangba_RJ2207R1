import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Input from "../components/Input"
import Button from "../components/Button";

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            studentList: [
                {
                    name: 'One',
                    phone: '0987654321',
                    email: 'one@gmail.com'
    
                }
            ]
        }
    }
    addStudent = (e) => {
        
        const name = document.querySelector('.name').value;
        const phone = document.querySelector('.phone').value;
        const email = document.querySelector('.email').value;

        this.setState({
            studentList: this.state.studentList
        })
        this.state.studentList.map((value) => {
            if (value.name === name) {
                alert("Sản phẩm đã tồn tại!")
            } else {
                this.state.studentList.push({name:name,phone:phone,email:email})
                this.setState({
                    studentList: [...this.state.studentList]
                })
            }
        })
        e.preventDefault();
    }
    render() {
        
        return (
            <>
                <div >
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <Input type="text" className="name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone:</label>
                        <Input type="text" className="phone" value={"0987234069" || ""}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <Input type="text" className="email" value="student@gamil.com"/>
                    </div>
                    <Button type="button" className="btn btn-primary" onClick={this.addStudent} value="Submit" />
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.studentList.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{value.name}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.email}</td>
                                        <td><Button value="Edit" className="btn btn-warning" onClick={() => { this.edit() }} /></td>
                                        <td><Button value="Delete" className="btn btn-danger" onClick={() => { this.del() }} /></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
export default Student