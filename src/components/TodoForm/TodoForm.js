import React from 'react';
import { Form } from 'react-bootstrap';

import useInputState from '../../hooks/useInputState';

const TodoForm = ({ addTodo }) => {
	const [ value, handleChange, reset ] = useInputState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
		reset();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Control type="text" placeholder="New Todo" value={value} onChange={handleChange} />
			</Form.Group>
		</Form>
	);
};

export default TodoForm;
