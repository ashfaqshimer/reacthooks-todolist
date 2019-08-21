import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Todo from '../Todo/Todo';
import { TodosContext } from '../../contexts/Todos.context';

const TodoList = () => {
	const todos = useContext(TodosContext);

	return (
		<ListGroup>
			{todos.map((todo) => <Todo key={todo.id} task={todo.task} completed={todo.completed} id={todo.id} />)}
		</ListGroup>
	);
};

export default TodoList;
