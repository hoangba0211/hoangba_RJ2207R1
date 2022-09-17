import { useState } from "react";

export default function FormContact() {
  const [form, setForm] = useState({})
  const messegeErorr = {
    name: 'Name error',
    email: 'Email error',
    phone: 'Phone error',
  }
  const REGEX = {
    name: /^[a-zA-Z]{2,}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^[0-9]{6,}$/,
  }
  const handleChange = (e) => {
    let error = '';
    error = REGEX[e.target.name].test(e.target.value) ? "" : messegeErorr[e.target.name];

    setForm({ ...form, [e.target.name]: { value: e.target.value, error: error } });
  }
  const handleSubmit = () => {
    const isFilled = form.name && form.name.value &&form.email && form.email.value && form.phone &&form.phone.value;
    const isError = isFilled && (form.name.error || form.email.error || form.phone.error)
    alert(
      isFilled && !isError
        ? "Sign up successfully!!!"
        : "Please fill out all the fields!!!"
    );
  }
  return (
    <div id="login">
      <p className="login__title">Sign up</p>
      <form className="login__user" >

        <label>Name</label>
        <input type="text" className={`name ${form.name && form.name.error && 'input__erorr'}`} name="name" onChange={handleChange}/>
        {form.name && form.name.error && (<p className="error">{form.name.error}</p>)}

        <label>Email</label>
        <input type="text" className="email" name="email" onChange={handleChange}/>
        {form.email && form.email.error && (<p className="error">{form.email.error}</p>)}



        <label>Phone</label>
        <input type="text" className="phone" name="phone" onChange={handleChange} />
        {form.phone && form.phone.error && (<p className="error">{form.phone.error}</p>)}

        <label>Message</label><br />
        <textarea style={{width:'100%'}}/>

        <button onClick={handleSubmit} className="btn" type="submit">Sign up</button>
      </form>
    </div>
  )
}