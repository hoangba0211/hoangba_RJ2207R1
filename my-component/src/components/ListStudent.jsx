const student = [
    {
        id: 1,
        name: 'Nam',
        age: 20,
        address: 'Hà nội'
    },
    {
        id: 2,
        name: 'Nam',
        age: 20,
        address: 'Hà nội'
    },
    {
        id: 3,
        name: 'Nam',
        age: 20,
        address: 'Hà nội'
    },
    {
        id: 4,
        name: 'Nam',
        age: 20,
        address: 'Hà nội'
    },
]
export default function Student() {
    return (
        <table className="table">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </thead>
            <tbody>
                {
                    student.map(function(value,index) {
                        return (
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.address}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}