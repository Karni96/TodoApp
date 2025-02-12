import "./todo.css"
import { useState } from 'react'

function ToDo() {

    const [val, setVal] = useState("");
    const [list, setList] = useState<string[]>([]);  
    const deleteItem = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <>
        <div className="todo">
            <h1>Todo list</h1>
            <input className="input" name="input" type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <button className="add" onClick={() => {setList([...list, val]); setVal("")}}> add</button>
            <ul className="ul">
                {list.map((item, index) => (
                    <li key={index}>{item} <button className="delete" onClick={() => deleteItem(index)}>delete</button></li>
                ))}
            </ul>
        </div>
    </>
  )
}
export default ToDo
