import React, {useState} from 'react'

export default function Counter() {
    console.log('yineleme')
    const [count, setCount] = useState(0)

    // console.log(useState(1))

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
