import React, { useState } from 'react';
import { ListGroupItem, Row, Col } from 'react-bootstrap';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({ task, id, completed }) => {
	return (
		<ListGroupItem key={id}>
			<Row>
				<Col>
					<Checkbox checked={completed} />
				</Col>
				<Col> {task}</Col>
				<Col>
					<DeleteIcon />
				</Col>
			</Row>
		</ListGroupItem>
	);
};

export default Todo;
