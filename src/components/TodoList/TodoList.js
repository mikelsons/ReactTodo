
import React, { useState, useImperativeHandle, forwardRef } from 'react';

import TodoRow from './TodoRow';

const List = ({initalItems = []}, ref) => {

    const [items, setItems] = useState(initalItems);

    useImperativeHandle(ref, () => ({
        addItem(todoItemTitle) {
            let nextId;
            if (items.length === 0) nextId = 1;
            else nextId = Math.max(...items.map(item => item.id)) + 1;
            setItems([...items, { id: nextId, title: todoItemTitle, done: false }]);
        },
    }));

    const handleCheck = (item) => {
        let newItems = [...items];
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].id === item.id) {
                newItems[i].done = !newItems[i].done;
                setItems(newItems);
                return;
            }
        }
    }

    return (
        <div className="todoItems">
            {items && items.map(item => {
                return (
                    <TodoRow key={item.id} item={item} handleCheck={handleCheck} />
                );
            })}
        </div>
    )
}

export default forwardRef(List);