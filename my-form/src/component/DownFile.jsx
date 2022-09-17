import { useState } from "react";

export default function DownFile() {
    const [selectFile, setSelectFile] = useState();
    const [isFile, setIsFile] = useState(false);

    const handleChangeFile = (e) => {
        setSelectFile(e.target.files[0])
        setIsFile(true)
        console.log(e.target.files[0]);
    }
    const handleSubmit = () => {

    }
    return (
        <div>
            <input type="file" name='file' onChange={handleChangeFile} />
            {isFile ? (
                <div>
                    <p>File Name: {selectFile.name}</p>
                    <p>File Type: {selectFile.type}</p>
                    <p>File size: {selectFile.size}</p>
                </div>
            ) : (<p>Select a file  to show details</p>)
            }
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}