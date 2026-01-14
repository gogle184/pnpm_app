'use client'

import { useState } from 'react'

export default function Counts() {
    const [count,  setCount] = useState(0)

    const Increments = () => {
        setCount(count+1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={Increments}>+1</button>
        </div>
    )
}