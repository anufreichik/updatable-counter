import React from 'react';
import ListItem from "./ListItem";

function List(props) {

    return (
        <div>
            {props.list.map((el, ind) =>
                <ListItem
                    key={el.id}
                    listlength={props.list.length}
                    el={el} i
                    index={ind}
                    changeCounterPosition={props.changeCounterPosition}
                    handleOperation={props.handleOperation}
                    handleUpdate={props.handleUpdate}
                    deleteCounter={props.deleteCounter}/>)}
        </div>
    );
}

export default List;
