import React, { useState } from 'react';

export default function ToggleHooks({render}) {
	const [isToggle, setIsToggle] = useState(false);

	const toggle = () => {
		setIsToggle(!isToggle);
	};
	return (
		<div>
			{render({
				on: isToggle,
				toggle : toggle
			})}
		</div>
	);
}
