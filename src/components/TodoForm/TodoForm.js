import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';

import useInputState from '../../hooks/useInputState';
import { TodosContext } from '../../contexts/Todos.context';

const TodoForm = () => {
	const [ value, handleChange, reset ] = useInputState('');

	const { addTodo } = useContext(TodosContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
		reset();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control type='text' placeholder='New Todo' value={value} onChange={handleChange} />
			</Form.Group>
		</Form>
	);
};

export default TodoForm;
