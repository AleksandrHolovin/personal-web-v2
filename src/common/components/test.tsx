'use client';

import { useState } from 'react';

export const TestComponent: React.FC = () => {
	const [count, setCount] = useState(1);
	return (
		<div onClick={() => setCount(prevState => prevState + 1)}>{count}</div>
	);
};
