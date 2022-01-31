import React from 'react';
import Accordion from './components/Accordion';
import Counter from './components/Counter';
import Search from './components/Search';
import UseEffect from './components/UseEffect';


const items = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

export default () => {
    // return <Search />
    // return <Accordion items={items} />;
    //return <Counter />
    return <UseEffect />
}