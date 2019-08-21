import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/Todo.reducer';

const defaultTodos = [
	{ id: 1, task: 'Finish react hooks', completed: false },
	{ id: 2, task: 'Finish react context', completed: false },
	{ id: 3, task: 'Finish types in JS', completed: true },
	{ id: 4, task: 'Finish hooks project', completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
	const [ todos, dispatch ] = useReducer(todoReducer, defaultTodos);
	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
		</TodosContext.Provider>
	);
};
