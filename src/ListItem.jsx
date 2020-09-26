import React, {useState} from 'react';

function ListItem(props) {

    const [editMode, setEditMode] = useState(false);
    const [updateVal, setUpdateVal] = useState(0);

    const changeEditMode = () => {
        setEditMode(!editMode);
    }
    const handleUpdateValueChange = (e) => {
        setUpdateVal(+e.target.value)
    }

    const updateOnClick = (id, val) => {
        props.handleUpdate(id, val);
        setEditMode(!editMode);
    }

    return (
        <div>
            <div>
                {Array.from({length: props.el.buttons}, (_, i) => i + 1).reverse().map(v =>
                    //MINUS BUTTONS

                    <button className='btn btn-dark btn-sm btn-space' key={Math.random()}
                            onClick={() => props.handleOperation(props.el.id, v)}>+{v}</button>
                )}

                {props.el.counter}

                {Array.from({length: props.el.buttons}, (_, i) => i + 1).map(v =>
                    //PLUS BUTTONS

                    <button className='btn btn-dark btn-sm btn-space' key={Math.random()}
                            onClick={() => props.handleOperation(props.el.id, -v)}>-{v}</button>
                )}

                {/*UP BUTTON*/}
                <button className='btn btn-info btn-sm btn-space' disabled={props.index === 0}
                        onClick={() => props.changeCounterPosition(props.el.id, -1)}>↑
                </button>

                {/*DOWN BUTTON*/}
                <button className='btn btn-info btn-sm btn-space' disabled={props.index === props.listlength - 1}
                        onClick={() => props.changeCounterPosition(props.el.id, +1)}>↓
                </button>

                {/*INPUT / BUTTONS UPDATE COUNTER VALUE*/}
                {editMode && <><input className='form-control-sm' type='number'   onChange={handleUpdateValueChange}  />
                    <button className='btn btn-info btn-sm btn-space'
                            onClick={() => updateOnClick(props.el.id, updateVal)}>Update
                    </button>
                    <button className='btn btn-info btn-sm btn-space' onClick={changeEditMode}>Cancel</button>
                </>}
                {/*EDIT BUTTON*/}

                {!editMode && <button className='btn btn-info btn-sm btn-space' onClick={changeEditMode}>Edit</button>}
                {!editMode && <button className='btn btn-danger btn-sm btn-space' onClick={()=>props.deleteCounter(props.el.id)}>Delete</button>}

            </div>
        </div>
    );
}

export default ListItem;
