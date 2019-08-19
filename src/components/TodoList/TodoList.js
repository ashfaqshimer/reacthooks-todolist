import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import Todo from '../Todo/Todo';

const TodoList = (props) => (
	<ListGroup>
		{props.todos.map((todo) => <Todo task={todo.task} completed={todo.completed} id={todo.id} />)}
	</ListGroup>
);

export default TodoList;
