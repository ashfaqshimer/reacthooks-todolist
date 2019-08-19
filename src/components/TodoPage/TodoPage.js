import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import uuid from 'uuid';

const TodoPage = () => {
	const initialTodos = [
		{ id: 1, task: 'Finish react hooks', completed: false },
		{ id: 2, task: 'Finish react context', completed: false },
		{ id: 3, task: 'Finish types in JS', completed: true },
		{ id: 4, task: 'Finish hooks project', completed: false }
	];
	const [ todos, setTodos ] = useState(initialTodos);

	const addTodo = (newTodo) => {
		setTodos([ ...todos, { id: uuid(), task: newTodo, completed: false } ]);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleTodo = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const editTodo = (id, text) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, task: text };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<div className="my-3">
			<div className="col col-md-8 m-auto">
				<TodoForm addTodo={addTodo} />
				<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
			</div>
		</div>
	);
};

export default TodoPage;
