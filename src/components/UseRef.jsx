import React, {useRef} from 'react'

export default function UseRef() {
    const [term, setTerm] = React.useState('')
    console.log('yinelendi')
    const inputRef = useRef()

    // console.log(inputRef)

    const inputChange = (e) => {
        inputRef.current.value = e.target.value
    }

    const submitButton = () => {
        console.log(inputRef.current.value)
    }

    const clear = () => {
        inputRef.current.value=''
    }



    return (
        <div>
            <input 
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            //onChange={inputChange} 
            ref={inputRef} ></input>
            <button onClick={submitButton}>Submit</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}
