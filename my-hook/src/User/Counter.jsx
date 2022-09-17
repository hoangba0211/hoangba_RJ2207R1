import { useState } from "react";

function Counter() {
    // const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const hadleChangeName = (e) => {
        setUserName(e.target.value)
    }

    const handleClick = () => setName(username)
    return (
        // <div className="container">
        //     <p>{count}</p>
        //     <button onClick={() => setCount(count + 1)}>+</button>
        // </div>
        <div className="container">
            <p>Hello {name}</p>
            <input type="text" onChange={hadleChangeName} />
            <button onClick={handleClick}>Save</button>
        </div>
    )
}
export default Counter