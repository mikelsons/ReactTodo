
import React, { useState } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default ({ onSubmit }) => {

    const [inputTxt, setInputTxt] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputTxt.trim().length === 0) return;
        onSubmit(inputTxt);
        setInputTxt("");
    }

    return (
        <Form onSubmit={handleSubmit} className="form__cmp">
            <FormControl className="form__input" type="text" placeholder="Enter task name..." onChange={v => setInputTxt(v.target.value)} value={inputTxt} />
            <Button className="ml-2 form__submit" type="submit" variant="primary">Add</Button>
        </Form>
    )
}
