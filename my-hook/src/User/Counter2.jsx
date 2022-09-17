import { useEffect } from "react";
import useCounter from "../components/useCounter";

export default function Counter2() {
    const [count1, increase1] = useCounter(0)
    const [count2, increase2] = useCounter(0)


    return (
        <div>
            <p>{count1}</p>
            <button onClick={() => {increase1(1)}}>Add 1</button>
            <p>{count2}</p>
            <button onClick={() => {increase2(count1)}}>Add 2</button>
        </div>
    )
}