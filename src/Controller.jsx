import React, {useState} from 'react';


function Controller(props) {
    const [initVal, setInitVal] = useState(0);
    const [numberButtons, setNumberButtons] = useState(1);
const [sortDirection, setSortDirection]=useState('asc');
    const handleOnChangeVal = (e) => {
        setInitVal(+e.target.value)
    }
    const handleOnChangeButtons = (e) => {
        setNumberButtons(+e.target.value)
    }

    const sortOnClick=()=>{
        const newDir=(sortDirection==='asc')?'desc':'asc';
        setSortDirection(newDir);
        props.sortCounters(sortDirection);
    }
    return (
        <div>
            <div className='form-group'>
                {/*<label for="initval">Init Value:</label>*/}
                <input className='form-control-sm' placeholder="Initial Value" id='initval'
                       onChange={handleOnChangeVal}/>
            </div>
            <div className='form-group'>

                <input className='form-control-sm' id='numberbuttons' placeholder="Number Buttons"
                       onChange={handleOnChangeButtons}/></div>
            <button className='btn btn-info btn-space' onClick={() => props.addCounter(initVal, numberButtons)}>Add New Counter
            </button>
            <button className='btn btn-info btn-space' onClick={sortOnClick}> Sort ↓↑</button>
            <hr/>
        </div>
    );
}

export default Controller;
