import { useState } from "react"

export default function FormSignUp() {
    const [form, setForm] = useState({})
    const messegeErorr = {
        username: 'Username error',
        email: 'Email error',
        password: 'Password error',
        confirmPassword: 'Password must be the same'
    }
    const reGex = {
        username: /^[a-zA-Z]{2,}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/,
    }

    const handleChange = (e) => {
        let error = "";
        if (e.target.name === "password") {
            if (form.confirmPassword && form.confirmPassword.value) {
                error =
                    e.target.value === form.confirmPassword.value
                        ? ""
                        : messegeErorr[e.target.name];
            } else {
                error = reGex[e.target.name].test(e.target.value)
                    ? ""
                    : messegeErorr[e.target.name];
            }
        } else if (e.target.name === "confirmPassword") {
            error =
                e.target.value === form.password.value
                    ? ""
                    : messegeErorr[e.target.name];
        } else {
            error = 
            reGex[e.target.name].test(e.target.value)
                ? ""
                : messegeErorr[e.target.name];
        }
        setForm({
            ...form,
            [e.target.name]: { value: e.target.value, error: error }
          });
    }
    const handleSubmit = () => {
        const isFilled =
            form.username &&
            form.username.value &&
            form.email &&
            form.email.value &&
            form.password &&
            form.password.value &&
            form.confirmPassword &&
            form.confirmPassword.value;
        const isError =
            isFilled &&
            (form.username.error ||
                form.email.error ||
                form.password.error ||
                form.confirmPassword.error);

        alert(
            isFilled && !isError
                ? "Sign up successfully!!!"
                : "Please fill out all the fields!!!"
        );
    }
    return (
        <div id="login">
            <p className="login__title">Sign up</p>
            <fomr className="login__user" >

                <label>Username</label>
                <input type="text" className="username" name="username" value={(form.username && form.username.value) || ""} onChange={handleChange} />
                {form.username && form.username.error && (<p className="error">*{form.username.error}</p>)}
                

                <label>Email</label>
                <input type="text" className="email" name="email" value={(form.email && form.email.value) || ""} onChange={handleChange} />
                {form.email && form.email.error && (<p className="error">*{form.email.error}</p>)}

                <label>Password</label>
                <input type="text" className="password" name="password" value={(form.password && form.password.value) || ""} onChange={handleChange} />
                {form.password && form.password.error && (<p className="error">*{form.password.error}</p>)}

                <label>Comfim Password</label>
                <input type="text" className="confirmPassword" name="comfimPass" value={(form.confirmPassword && form.confirmPassword.value) || ""} onChange={handleChange} />
                {form.confirmPassword && form.confirmPassword.error && (<p className="error">*{form.confirmPassword.error}</p>)}

                <button onClick={handleSubmit} className="btn" type="submit">Sign up</button>
            </fomr>
        </div>
    )
}