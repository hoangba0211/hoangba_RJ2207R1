import React from 'react'
import { useLocation , useNavigate, useParams} from 'react-router-dom'

function EmployeeDetail() {
    const navigate = useNavigate()
    const {name} = useParams()
    const {state} = useLocation()
    console.log(state, name);
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={state.avatar} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{state.age}</p>
                <button className="btn btn-primary" onClick={()=>navigate(-1)}>Back Home</button>
            </div>
        </div>
        )
}
export default EmployeeDetail