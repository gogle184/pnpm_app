'use client'

import { useState } from 'react'

export default function Counts() {
    const [count,  setCount] = useState(0)

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=> setCount(count + 1)}>+1</button>
        </div>
    )
}