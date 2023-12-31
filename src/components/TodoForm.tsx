import React, { useState } from "react";

interface TodoFormProps {
    onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    const [title, setTitle] = useState<string>("");

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const keyDownHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(title);
            setTitle("");
        }
    }
    return (
        <div className="input-field mt2">
            <input
                type="text"
                id="title"
                placeholder="Todoname eingeben ..."
                value={title}
                onChange={changeHandler}
                onKeyDown={keyDownHandler}
            />
            <label htmlFor="title" className="active">
                Bezeichnung
            </label>
        </div>
    );
};
