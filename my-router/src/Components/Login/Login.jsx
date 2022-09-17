import { useState } from "react"
import {useNavigate } from "react-router-dom"

export const Login = () => {
    const [form, setForm] = useState({})
    let navigate = useNavigate();
    const messegeErorr = {
        email: 'Email error',
        password: 'Password error',
      }
      const REGEX = {
        password: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      }
    const handleChange = (e) => {
        let error = '';
        error = REGEX[e.target.name].test(e.target.value) ? "" : messegeErorr[e.target.name];
        setForm({ ...form, [e.target.name]: { value: e.target.value, error: error } });
        console.log(form);
    }
    const handleClick = () => {
        const isFilled = form.email && form.email.value &&form.password && form.password.value;
        const isError = isFilled && (form.email.error || form.password.error)
        if(!isFilled){
            alert('Hãy nhập đầy đủ thông tin!')
        }
        if (isFilled
            && !isError 
            && form.email.value === 'admin@gmail.com'
            && form.password.value === 'admin') {
            navigate(`/home`, {state:{account: form.email.value}})
        }
    }
    return (
        <div className="container">
            <input type="text" placeholder="Email" name="email" onChange={handleChange} />
            {form.email && form.email.error && (<p className="error">{form.email.error}</p>)}
            <input type="text" placeholder="Password" name="password" onChange={handleChange} />
            {form.password && form.password.error && (<p className="error">{form.password.error}</p>)}
            <button type="button" onClick={handleClick}>Submit</button>
        </div>
    )
}