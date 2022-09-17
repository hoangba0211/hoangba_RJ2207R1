import { useState } from "react"

export default function FormLogin() {
    const [form, setForm] = useState({username:'',email:'',password:'',comfimPass:''})

    const handleChange = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit = () => {
        const isValue = form.username && form.email && form.password && form.comfimPass
        alert(isValue? 'Sign in success!!!':'Please fill out all the fields!!!')
    }
    return (
        <div id="login">
            <p className="login__title">Sign up</p>
            <fomr className="login__user" >
                <label>Username</label>
                <input type="text" className="username" name="username" onChange={handleChange}/>
                <p className="error__username"></p>
                <label>Email</label>
                <input type="text" className="email" name="email" onChange={handleChange}/>
                <p className="error__email"></p>
                <label>Password</label>
                <input type="text" className="password" name="password" onChange={handleChange}/>
                <p className="error__password"></p>
                <label>Comfim Password</label>
                <input type="text" className="comfimPass" name="comfimPass" onChange={handleChange}/>
                <p className="error__comfimPass"></p>
                <button onClick={handleSubmit} className="btn" type="submit">Sign up</button>
            </fomr>
        </div>
    )
}