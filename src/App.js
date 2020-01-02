import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './ToggleRPC';
// import Toggle from './ToggleHooks';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<Toggle>
					{({ on, toggle }) => (
						<>
							{on && <h1>Yo</h1>}
							<button onClick={toggle}> Show / Hide Button</button>
						</>
					)}
				</Toggle>
			</header>
		</div>
	);
}

export default App;
