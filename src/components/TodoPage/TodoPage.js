import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';
import { TodosProvider } from '../../contexts/Todos.context';

const TodoPage = () => {
	return (
		<div className='my-3'>
			<div className='col col-md-8 m-auto'>
				<TodosProvider>
					<TodoForm />
					<TodoList />
				</TodosProvider>
			</div>
		</div>
	);
};

export default TodoPage;
