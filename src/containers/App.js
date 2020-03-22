import React, { Component } from 'react';
// css
import classes from './App.css';
// custom components
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			persons: [
				{ id: 'as3a', name: 'Max', age: 28 },
				{ id: 'dsd7', name: 'Manu', age: 29 },
				{ id: 'md32', name: 'Jordan', age: 26 },
			],
			showPerson: false,
			changeCounter: 0,
			authenticated: false
		};
		console.log('[App.js]  constructor')
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props)
		return state
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount')
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate')
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate')
		return true;
	}

	changeNameHandle = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id
		});

		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1
			}
		});
	}

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	togglePersonHandler = () => {
		this.setState({ showPerson: !this.state.showPerson });
	}

	loginHaddler = () => {
		this.setState({ authenticated: true });
	}

	render() {
		console.log('[App.js] rendering...')
		const { persons, showPerson, authenticated } = this.state;

		let personList = null;
		if (showPerson) {
			personList = <Persons
				persons={persons}
				clicked={this.deletePersonHandler}
				changed={this.changeNameHandle} />
		}

		return (
			<Aux>
				<AuthContext.Provider value={{ authenticated: authenticated, login: this.loginHaddler }}>
					<Cockpit
						showPerson={showPerson}
						persons={persons}
						clicked={this.togglePersonHandler}
					/>
					{personList}
				</AuthContext.Provider>
			</Aux>

		)
	}

}

export default withClass(App, classes.App);

