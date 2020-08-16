import React, { useState } from 'react';

interface Props {
    addTodo: AddTodo;
}
// useState: react hook.      * Returns a stateful value, and a function to update it.
export const AddTodoForm: React.FC<Props> = ({addTodo}) => {
    const [text, setText] = useState('');

    return (
        <form>
            <input type="text"  value={text} onChange={e => {setText(e.target.value)}}
            />
            <button type="submit"  onClick={e => {
                e.preventDefault();
                addTodo(text);
                setText('');
            }}>Add Todo</button>
        </form>
    );
};