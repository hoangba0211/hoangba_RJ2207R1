import { useEffect, useState } from "react"

export default function Timer() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        let id = setInterval(() => {
            if(count > 0) setCount(count - 1)
        }, 1000);
        if(count === 0) alert('Time out!');
        return () => { clearInterval(id) };
    }, [count]);


    return (
        <div className="container">
            <p>Count down form {count}</p>
        </div>
    )
}