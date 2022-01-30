import React, { useState } from 'react'

// class Accordion extends React.Component {
//     state = {activeIndex: 0}

//     onTitleClick = (index) => {
//         this.setState({activeIndex: index})
//     }
// }


export default function Accordion({ items }) {
    console.log('yenilendi')

    const [activeIndex, setActiveIndex] = useState(null)

    // console.log(useState())

    const onTitleClick = (index) => {
        setActiveIndex(index)
        console.log("ai", activeIndex)
        // console.log('title clicked', index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''

        return(
            <div key={index}>
            <div 
            className={`title ${active}`}
            onClick={() => onTitleClick(index)} 
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div 
            className={`content ${active}`}
            >
                {item.content}
            </div>
            </div>
        )
    })

    return (
       <div className="ui styled accordion">
           {renderedItems}
           {/* <h1>{activeIndex}</h1> */}
       </div>
    )
}


