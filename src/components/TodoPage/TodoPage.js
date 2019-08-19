import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

const TodoPage = () => {
	const initialTodos = [
		{ id: 1, task: 'Finish react hooks', completed: false },
		{ id: 2, task: 'Finish react context', completed: false },
		{ id: 3, task: 'Finish types in JS', completed: true },
		{ id: 4, task: 'Finish hooks project', completed: false }
	];
	const [ todos, setTodos ] = useState(initialTodos);

	const addTodo = (newTodo) => {
		setTodos([ ...todos, { id: 5, task: newTodo, completed: false } ]);
	};

	return (
		<div className="my-3">
			<div className="col col-md-6 text-center m-auto">
				<TodoForm addTodo={addTodo} />
				<TodoList todos={todos} />
			</div>
		</div>
	);
};

export default TodoPage;
