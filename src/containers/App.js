import React, { Component } from 'react';
// css
import classes from './App.css';
// custom components
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

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
		};
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

	render() {
		const { persons, showPerson } = this.state;

		let personList = null;
		if (showPerson) {
			personList = <Persons
				persons={persons}
				clicked={this.deletePersonHandler}
				changed={this.changeNameHandle} />
		}

		return (
			<div className={classes.App}>
				<Cockpit
					showPerson={showPerson}
					persons={persons}
					clicked={this.togglePersonHandler}
				/>
				{personList}
			</div>
		)
	}
}

export default App;

