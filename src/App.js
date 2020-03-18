import React, { Component } from 'react';
// css
import classes from './App.css';
// custom components
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
			{ id: 'as3a', name: 'Max', age: 28 },
			{ id: 'dsd7', name: 'Manu', age: 29 },
			{ id: 'md32', name: 'Jordan', age: 26 },
		],
		showPerson: false
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	}

	togglePersonHandler = () => {
		this.setState({ showPerson: !this.state.showPerson });
	}

	changeNameHandle = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => p.id === id);
		const person = { ...this.state.persons[personIndex] };
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({
			persons: persons
		});
	}
	render() {
		const { persons, showPerson } = this.state;
		let btnClass = '';
		let assignedClasses = [];
		let personList = null;
		if (showPerson) {
			personList = persons.map((person, index) => <Person removePerson={this.deletePersonHandler.bind(this, index)} changed={(event) => this.changeNameHandle(event, person.id)} key={person.id} {...person} />)
			btnClass = classes.Red;
		}
		if (persons.length <= 3) {
			assignedClasses.push(classes.red);
		}
		if (persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}
		return (
			<div className={classes.App}>
				<h1>Hello React</h1>
				<p className={assignedClasses.join(' ')}>This is working!</p>
				<button className={btnClass} onClick={() => this.togglePersonHandler()}>Switch {showPerson ? 'Off' : 'On'}</button>
				{personList}
			</div>

		)
	}

}

export default App;

