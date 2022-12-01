import React from 'react'
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</ul>
	);
}

export default TodoList
