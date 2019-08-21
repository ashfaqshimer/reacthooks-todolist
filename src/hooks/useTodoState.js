import uuid from 'uuid';

import { useLocalStorageState } from './useLocalStorageState';

const useTodoState = (initialTodos) => {
	const [ todos, setTodos ] = useLocalStorageState('todos', initialTodos);
	return {
		todos,
		addTodo    : (newTodo) => {
			setTodos([ ...todos, { id: uuid(), task: newTodo, completed: false } ]);
		},

		removeTodo : (id) => {
			setTodos(todos.filter((todo) => todo.id !== id));
		},

		toggleTodo : (id) => {
			const updatedTodos = todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});
			setTodos(updatedTodos);
		},

		editTodo   : (id, text) => {
			const updatedTodos = todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, task: text };
				}
				return todo;
			});
			setTodos(updatedTodos);
		}
	};
};

export default useTodoState;
