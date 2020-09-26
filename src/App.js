import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import List from "./List";
import Controller from "./Controller";

function App() {
    const [list, setList] = useState([
        {id: uuidv4(), counter: 5, buttons: 3},
        {id: uuidv4(), counter: 13, buttons: 4},
        {id: uuidv4(), counter: 3, buttons: 1}
    ])

    const addCounter = (val, buttons) => {
        setList([...list, {id: uuidv4(), counter: val, buttons: buttons}])
    }
    const deleteCounter = (id) => {
        setList(
            list.filter(el => el.id !== id)
        )
    }
    const sortList = (dir) => {
        const newList = [...list];
        if (dir === 'asc')
            newList.sort((a, b) => a.buttons - b.buttons);
        else
            newList.sort((a, b) => b.buttons - a.buttons);
        setList(newList);
    }
    const changeCounterPosition = (id, val) => {
        const newList = [...list];
        const ind = (newList.map(el => el.id)).indexOf(id);
        const current = newList[ind];
        newList[ind] = newList[ind + val];
        newList[ind + val] = current;
        setList(newList);
    }

    const handleOperation = (id, val) => {
        const newList = list.map(el => (el.id === id) ? {...el, counter: el.counter + val} : el);
        setList(newList);
    }

    const handleUpdate = (id, val) => {
        const newList = list.map(el => (el.id === id) ? {...el, counter: val} : el);
        setList(newList);
    }

    return (
        <div className='App'>
            <div>
                <Controller addCounter={addCounter} sortCounters={sortList}/>
            </div>
            <div>
                <List list={list}
                      changeCounterPosition={changeCounterPosition}
                      handleOperation={handleOperation}
                      handleUpdate={handleUpdate}
                      deleteCounter={deleteCounter}
                />
            </div>
        </div>
    );
}

export default App;
