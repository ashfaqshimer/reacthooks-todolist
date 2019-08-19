import { useState } from 'react';
const useToggleState = (initialVal) => {
	const [ state, setstate ] = useState(initialVal);
	const toggle = () => {
		setstate(!state);
	};
	return [ state, toggle ];
};

export default useToggleState;
