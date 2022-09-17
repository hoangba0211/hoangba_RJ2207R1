import {useNavigate } from "react-router-dom";
export const Category = () => {
    let navigate = useNavigate();
    const senDataToProduct = (e) => {
        navigate(`/${e.target.value}`)
    }
    return (
        <div>
            <h1>Select a Categoty</h1>
            <select defaultValue="default" onChange={e => senDataToProduct(e)} >
                <option value="default" disabled hidden>Choose your car</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Yamada">Yamada</option>
            </select>
            <hr />
        </div>
    )
}