import React from 'react';
import { Container } from 'react-bootstrap';

import './App.css';
import TodoPage from './components/TodoPage/TodoPage';

function App() {
	return (
		<div className='App'>
			<Container>
				<TodoPage />
			</Container>
		</div>
	);
}

export default App;
