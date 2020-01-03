import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'utils';
import { Modal } from 'elements';
// import Toggle from './ToggleHooks';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Toggle>
					{({ on, toggle }) => (
						<>
							<button onClick={toggle}>Login</button>
							<Modal on={on} toggle={toggle}>
								<h1>BIG dog in the house se </h1>
							</Modal>
						</>
					)}
				</Toggle>
			</header>
		</div>
	);
}

export default App;
