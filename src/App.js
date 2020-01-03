import React, { createContext, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'utils';
import { Modal } from 'elements';
import User from './User';
import {UserContext} from './UserContext'
// import Toggle from './ToggleHooks';


class UserProvider extends Component {
	state = {
		id: '234',
		name: 'nell',
		email: 'bigboss@gmail.com'
	};

	render() {
		return (
			<UserContext.Provider
				value={{
					user: this.state
				}}
			>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

function App() {
	return (
		<UserProvider>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<User />
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
		</UserProvider>
	);
}

export default App;
