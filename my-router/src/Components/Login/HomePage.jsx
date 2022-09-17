
import { useLocation, useNavigate } from "react-router-dom"

export const Home = () => {
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20,
            avatar:'https://i.pinimg.com/236x/f9/2e/a9/f92ea925e1998108f8478b4984270b4d.jpg'
        },
        {
            id: 2,
            name: "Khánh",
            age: 25,
            avatar:'https://i.pinimg.com/236x/26/19/92/26199244628a8ac5605bddd8de79a064.jpg'
        },
        {
            id: 3,
            name: "Tú",
            age: 22,
            avatar:'https://i.pinimg.com/736x/39/c8/30/39c830b0f32688fb967c67e2fff0fadd.jpg'
        },
    ]
    const navigate = useNavigate()
    const { state } = useLocation();
    const handleDetail = (i) => {
        navigate(`/employee/${employees[i].name}`, { state: { name: employees[i].name, age: employees[i].age,avatar:employees[i].avatar } })
    }
    return (
        <div>
            <h3>Wecome to Home Page's {state.account}</h3>
            <table className="table table-striped" style={{ width: "28rem" }}>
                <thead>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Detail</th>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => {
                            return (
                                <tr key={index}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.age}</td>
                                    <td><button onClick={() => handleDetail(index)} className='btn btn-info'>Detail</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}