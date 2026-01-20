'use client'

import { useState} from 'react'

export default function Todo() {
    const [items, setItems] = useState<string[]>([])
    const addItem = () => {
        setItems([...items, 'new todo'])
    }
    
    return (
        <div>
            <p>Todos</p>
            <button onClick={addItem}>追加</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}