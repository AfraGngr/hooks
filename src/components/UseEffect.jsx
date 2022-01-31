import React, { useEffect , useState} from 'react'

export default function UseEffect() {
    const [name, setName] = useState('')
    const [term, setTerm] = useState('')

    useEffect(() => {
        console.log('I RUN AT JUST INITIAL RENDER')
    }, [])

    useEffect(() => {
        console.log('I RUN AT INITIAL AND EVERY RENDER')
    })

    useEffect(() => {
        console.log('I RUN AT INITIAL RENDER AND NAME IS CHANGED')
    }, [name])

    const setter1 = () => {
        setName(name + 'x')
    }

    const setter2 = () => {
        setTerm(term + 'a')
    }

    return (
        <div>
            <button onClick={setter1} > Setter 1</button>
            <button onClick={setter2} > Setter 2</button>
        </div>
    )
}
