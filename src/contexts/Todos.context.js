import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
	{ id: 1, task: 'Finish react hooks', completed: false },
	{ id: 2, task: 'Finish react context', completed: false },
	{ id: 3, task: 'Finish types in JS', completed: true },
	{ id: 4, task: 'Finish hooks project', completed: false }
];

export const TodosContext = createContext();

export const TodosProvider = (props) => {
	const todosMethods = useTodoState(defaultTodos);
	return <TodosContext.Provider value={todosMethods}>{props.children}</TodosContext.Provider>;
};
