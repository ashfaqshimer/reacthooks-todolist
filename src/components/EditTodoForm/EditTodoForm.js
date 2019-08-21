import React, { useContext } from 'react';
import useInputState from '../../hooks/useInputState';
import { TextField, InputAdornment } from '@material-ui/core';
import { CloseButton } from 'react-bootstrap';
import { DispatchContext } from '../../contexts/Todos.context';

const EditTodoForm = ({ toggleEditing, task, id }) => {
	const [ newTodo, handleChange, reset ] = useInputState(task);

	const dispatch = useContext(DispatchContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'EDIT', id, newTodo });
		reset();
		toggleEditing();
	};

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				label='Edit Todo'
				variant='outlined'
				value={newTodo}
				onChange={handleChange}
				autoFocus
				fullWidth
				InputProps={{
					endAdornment : (
						<InputAdornment>
							<CloseButton onClick={toggleEditing} />
						</InputAdornment>
					)
				}}
			/>
		</form>
	);
};

export default EditTodoForm;
