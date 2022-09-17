import { useEffect, useState } from "react"

function EffectDemo() {
    const subject = ['PHP', 'JavaScript', 'Ruby', 'Java'];
    const [selector, setSelector] = useState('');
    const [selectorValue, setSelectorValue] = useState(0);

    useEffect(()=> {
        setSelector(subject[selectorValue])
    },[selectorValue])
    const Chosse = (e) => {
        setSelectorValue(e.target.value)
    }

    return (
        <div className="container">
            <label htmlFor="">Khóa học:</label>
            <select onChange={(e) => {Chosse(e)}}>
                {
                    subject.map((sub,index) => {
                        return(
                            <option value={index}>{sub}</option>
                        )
                    })
                }
            </select>
            <p>Your selector:{selector} </p>
        </div>
    )
}
export default EffectDemo