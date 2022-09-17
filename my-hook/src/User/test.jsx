import { useState } from "react";

const oders = [100,200,300]
export default function TestHooks() {
    
    const [count, setCount] = useState(() => {
        const total = oders.reduce((total,ucc) => (total + ucc))
        return total
    });
    const handleClick = () => {
        setCount(pre => (pre + 1))
    }
    return (
        <div className="container">
            <p>{count}</p>
            <button onClick={handleClick}>+</button>
        </div>
    )
}