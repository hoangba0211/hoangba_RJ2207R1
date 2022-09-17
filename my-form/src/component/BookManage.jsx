import { useState } from "react"

export default function BookManage() {
    const [i, setIndex] = useState(0)
    const [input,setInput] = useState({title:'',number:''})
    const [books, setBooks] = useState([])
    const [form, setForm] = useState({})
    const [isStatus, setIsStatus] = useState(true)
    const REGEX = {
        title: /^[a-zA-Z0-9]{2,}$/,
        number: /^[0-9]{1,}$/,
    }
    const messegeErorr = {
        title: 'Title error',
        number: 'Number error',
    }
    const handleChange = (e) => {
        setInput(e.target.value)
        let erorr = '';
        erorr = REGEX[e.target.name].test(e.target.value) ? '' : messegeErorr[e.target.name]

        setForm({ ...form, [e.target.name]: { value: e.target.value, erorr: erorr } })
    }
    const handleSubmit = () => {
        const isFilled = form.title && form.title.value && form.number && form.number.value;
        const isError = isFilled && (form.title.error || form.number.error);
        let check = false;
        for (let i = 0; i < books.length; i++) {
            if (!isFilled || isError || books[i].title === form.title.value) {
                check = true
            }
        }
        if (!check) {
            setBooks([...books, {
                title: form.title.value,
                number: form.number.value
            }])
        }
    }

    const handleEdit = (i) => {
        setIsStatus(false)
        setIndex(i)
        setInput({title:books[i].title,number:books[i].number})
    }
    const handleUpdate = (i) => {
        let newBook = [...books];
        let check = false;
        setIsStatus(true)
        const isFilled = form.title && form.title.value && form.number && form.number.value;
        const isError = isFilled && (form.title.error || form.number.error);
        for (let i = 0; i < books.length; i++) {
            if (!isFilled || isError || books[i].title === form.title.value) {
                check = true
            }
        }
        if (!check) {
            newBook[i].title = form.title.value
            newBook[i].number = form.number.value
            setBooks(newBook)
        }
    }
    const handleDelete = (i) => {
        var reBook = books.splice(i, 1)
        setBooks(books.filter((book) => { return book !== reBook }))

    }

    var btnStatus = isStatus ? 
    (<button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>)
    : (<button type="submit" className="btn btn-success" onClick={() => handleUpdate(i)}>Update</button>)
    return (

        <div id="book">
            <h1>Library</h1>
            <div className="form my_row">
                <div className="form-item">
                    <label htmlFor="">Tiêu đề</label>
                    <input type="text" name="title" onChange={handleChange} value={input.title}/>
                    {form.title && form.title.erorr && (<p className="text-danger">*{form.title.erorr}</p>)}
                </div>

                <div className="form-item">
                    <label htmlFor="">Số lượng</label>
                    <input type="text" name="number" onChange={handleChange} value={input.number}/>
                    {form.number && form.number.erorr && (<p className="text-danger">*{form.number.erorr}</p>)}
                </div>
                {btnStatus}
            </div>

            <div className="my_row" style={{ flexDirection: "column" }}>
                <table className="table" style={{ width: '100%' }}>
                    <colgroup>
                        <col style={{ width: '30%' }} />
                        <col style={{ width: '30%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                    </colgroup>
                    <tbody>
                        {
                            books.map((item, index) => {
                                return (
                                    <tr key={Math.random()} className="m-2">
                                        <td>{item.title}</td>
                                        <td>{item.number}</td>
                                        <td className="item_func">
                                            <button className="btn btn-info m-2" onClick={() => handleEdit(index)}>Edit</button>
                                        </td>
                                        <td className="item_func">
                                            <button className="btn btn-danger m-2" onClick={() => handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}