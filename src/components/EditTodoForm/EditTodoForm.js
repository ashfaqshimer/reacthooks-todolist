import React from 'react';
import useInputState from '../../hooks/useInputState';
import { TextField, InputAdornment } from '@material-ui/core';
import { CloseButton } from 'react-bootstrap';

const EditTodoForm = ({ toggleEditing, task, editTodo, id }) => {
	const [ newTodo, handleChange, reset ] = useInputState(task);

	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo(id, newTodo);
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
