import React, {useState} from 'react';


function Controller(props) {
    const [initVal, setInitVal] = useState(0);
    const [numberButtons, setNumberButtons] = useState(1);
    const [sortDirection, setSortDirection] = useState('asc');

    const handleOnChangeVal = (e) => {
        setInitVal(+e.target.value)
    }
    const handleOnChangeButtons = (e) => {
        const buttonValue  = (+e.target.value>10)?10: Math.abs(+e.target.value);
        setNumberButtons(buttonValue);
    }

    const sortOnClick = () => {
        const newDir = (sortDirection === 'asc') ? 'desc' : 'asc';
        setSortDirection(newDir);
        props.sortCounters(sortDirection);
    }

    return (
        <div>
            <div className='form-group'>
                <label htmlFor="initval" className="col-form-label-sm">Init Value </label>
                <input className='form-control-sm' id="initval" placeholder="Initial Value"  type='number' value={initVal}
                       onChange={handleOnChangeVal}/>
            </div>
            <div className='form-group'>
                <label htmlFor="numberButtons" className="col-form-label-sm">Number Buttons </label>
                <input className='form-control-sm'   id="numberButtons" placeholder="Number Buttons" type="number" min="1" value={numberButtons}

                       onChange={handleOnChangeButtons}/></div>
            <button className='btn btn-info btn-space' onClick={() => props.addCounter(initVal, numberButtons)}>Add New
                Counter
            </button>
            <button className='btn btn-info btn-space' onClick={sortOnClick}> Sort ↓↑</button>
            <hr/>
        </div>
    );
}

export default Controller;
