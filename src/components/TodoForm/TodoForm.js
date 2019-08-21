import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';

import useInputState from '../../hooks/useInputState';
import { DispatchContext } from '../../contexts/Todos.context';

const TodoForm = () => {
	const [ value, handleChange, reset ] = useInputState('');

	const dispatch = useContext(DispatchContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'ADD', newTodo: value });
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
