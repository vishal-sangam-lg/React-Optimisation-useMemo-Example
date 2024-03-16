import React, { useState, useCallback } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';


function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [listItems, setListItems] = useState([5, 3, 1, 10, 9, 2]);

  const changeTitleHandler = useCallback(() => {
    console.log('change title clicked');
    setListTitle('New Title ' + Math.floor(Math.random() * 10) + 1);
  }, []);

  const changeListHandler = useCallback(() => {
    console.log('change list numbers clicked');
    setListItems((items) => [...items, Math.floor(Math.random() * 10000) + 1])
  }, [])

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeListHandler}>Change List Numbers</Button>

      <div style={{borderLeft: "2px solid black", textAlign: "left", padding: "10px", margin: "30px 8px"}}>
        When the title is changed, DemoList is re-rendered but sort function is not called <br/> <br/>
        Only when a new number is added to list, the sort function is also called <br/> <br/>
        In real world, use to for some function which involves intensive computation
      </div>
    </div>
  );
}

export default App;
