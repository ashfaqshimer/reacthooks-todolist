import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Todo from '../Todo/Todo';

const TodoList = ({ removeTodo, todos, toggleTodo, editTodo }) => (
	<ListGroup>
		{todos.map((todo) => (
			<Todo
				key={todo.id}
				task={todo.task}
				completed={todo.completed}
				id={todo.id}
				removeTodo={removeTodo}
				toggleTodo={toggleTodo}
				editTodo={editTodo}
			/>
		))}
	</ListGroup>
);

export default TodoList;
