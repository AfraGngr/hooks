import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const onButtonClick = () => {
        setCount(count+1)
    }

    return (
        <div>
            <button onClick={onButtonClick}>Click !</button>
            <h1>Current Count : {count} </h1>
        </div>
    )
}
