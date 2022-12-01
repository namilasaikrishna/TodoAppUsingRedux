import React from 'react'
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/Slice";
import {AiFillDelete} from "react-icons/ai"
import {Card,Button,Container,Row,Col,Form} from "react-bootstrap"

function TodoItem({id,title}) {
  
	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

	return (
		<Container>
		<Row className="mt-5">
		<Col xs={6}>
			
			{title}
			
				</Col>
			
			<Col xs={6}>
			<Button className="remove-task-button" onClick={()=>{
				removeTask();
			}}><AiFillDelete/></Button>
			</Col>
		</Row>
		
		</Container>
	);
}

export default TodoItem
