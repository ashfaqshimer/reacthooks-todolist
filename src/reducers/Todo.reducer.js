import uuid from 'uuid';

const reducer = (todos, action) => {
	switch (action.type) {
		case 'ADD':
			return [ ...todos, { id: uuid(), task: action.newTodo, completed: false } ];

		case 'REMOVE':
			return todos.filter((todo) => todo.id !== action.id);

		case 'EDIT':
			return todos.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, task: action.newTodo };
				}
				return todo;
			});

		case 'TOGGLE':
			return todos.map((todo) => {
				if (todo.id === action.id) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});

		default:
			return todos;
	}
};

export default reducer;
