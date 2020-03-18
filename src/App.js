import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

// React Hooks Future
const App = (props) => {
	const [ personsState, setPersonsState ] = useState({
		persons: [
			{ id: 'as3a', name: 'Max', age: 28 },
			{ id: 'dsd7', name: 'Manu', age: 29 },
			{ id: 'md32', name: 'Jordan', age: 26 },
		]
	});

	const [ showPersonState, setShowPersonState] = useState(false);

	const deletePersonHandler = (personIndex) => {
		const persons = [...personsState.persons];
		persons.splice(personIndex, 1);
		setPersonsState({persons:persons});
	}

	const togglePersonHandler = () => {
		setShowPersonState(!showPersonState);
	}

	const changeNameHandle = (event, id) => {
		const personIndex = personsState.persons.findIndex(p => p.id === id);
		const person =  { ...personsState.persons[personIndex] };
		person.name = event.target.value;
		const persons = [...personsState.persons];
		persons[personIndex] = person;
		setPersonsState({
			persons:persons
		});
	}
	const style = {
		backgroundColor: 'green',
		color: 'white',
		border: '1px solid #222',
		padding: '8px',
		cursor: 'pointer'
	}
	let classes = [];
	let personList = null;
	if(showPersonState){
		style.backgroundColor = 'red';
		personList = personsState.persons.map((person,index) => <Person removePerson={deletePersonHandler.bind(this,index)} changed={(event) => changeNameHandle(event, person.id)} key={person.id} {...person}/>  )
	}
	console.log(personsState.persons.length)
	if(personsState.persons.length <= 3){
	 	classes.push('red');
	}
	if(personsState.persons.length <= 1){
	 	classes.push('bold');
	}
	return (
		<div className="App">
			<h1>Hello React</h1>
			<p className={classes.join(' ')}>This is working!</p>
			<button style={style} onClick={() => togglePersonHandler()}>Switch { showPersonState ? 'Off' : 'On'}</button>
			{personList}
		</div>
	);
	
}

export default App;

