'use client'

import { useState } from "react"

export default function InputTodo() {
    const [items, setItems] = useState<string[]>([])
    const [text, setText]= useState('')

    const addItems = () => {
        if (text=='') return
        setItems([...items, text])
        setText('')
    }

    return(
        <div>
            <p>InputTodos</p>
            <input 
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            />

            <button onClick={addItems}>addItems</button>

        <ul>
            {items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
    )
}