import React, { useContext } from 'react';
import { ListGroupItem, Row, Col } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useToggleState from '../../hooks/useToggleState';
import EditTodoForm from '../EditTodoForm/EditTodoForm';
import { TodosContext } from '../../contexts/Todos.context';

const Todo = ({ task, id, completed }) => {
	const [ isEditing, toggleEditing ] = useToggleState(false);
	const { removeTodo, toggleTodo, editTodo } = useContext(TodosContext);

	return (
		<ListGroupItem>
			{isEditing ? (
				<EditTodoForm toggleEditing={toggleEditing} task={task} editTodo={editTodo} id={id} />
			) : (
				<Row>
					<Col md={1}>
						<Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
					</Col>
					<Col md={8} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
						{task}
					</Col>
					<Col md={3}>
						<IconButton onClick={toggleEditing}>
							<EditIcon />
						</IconButton>
						<IconButton onClick={() => removeTodo(id)}>
							<DeleteIcon />
						</IconButton>
					</Col>
				</Row>
			)}
		</ListGroupItem>
	);
};

export default Todo;
