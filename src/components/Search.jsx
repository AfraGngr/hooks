import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Search() {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    
    useEffect(() => {
        /**  
        --directly run function with adding paranthesis
        (async () => {
            await axios.get('bla bla')
        })()
        */
        
        const search = async () => {
            const { data }= await axios.get("https://en.wikipedia.org/w/api.php", {
                params : {
                    action : 'query',
                    list : 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term

                }
            })
            console.log('data', data)

            setResults(data.query.search)
        }
  
        search()

    },[term])


    const renderedResults = results.map(result => {
        return(
            <div className='item'>
                <div className='content'>
                    <div className='header'>{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    {/* {result.snippet} */}
                </div>
            </div>
        )
    })



    const inputChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <div>
            <div className="ui form">
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input
                    value={term}
                    onChange={(e) => inputChange(e)}
                    // onChange = {(e) => setTerm(e.target.value)}
                    className='input'></input>
                </div>
            </div>
            <div className='ui celled list'>{renderedResults}</div>
        </div>
    )
}
