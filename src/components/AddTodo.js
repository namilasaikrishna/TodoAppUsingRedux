import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/Slice";
import {Card,Button,Container,Row,Col,Form} from "react-bootstrap"

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
		<Container>
		<Row>
		<Col xs={8} className="mt-3"><Form.Control type="text" placeholder="Add Todo" value={value}
		onChange={(event) => setValue(event.target.value)}/></Col>
		<Col xs={4}>
		<Button className="task-button" onClick={onSubmit}>
			Add
		</Button></Col>
		</Row>
			

		</Container>
	);
};

export default AddTodo;
