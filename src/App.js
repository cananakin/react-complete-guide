import React, { Component } from 'react';
import Radium from 'radium';
import styled from 'styled-components'
// css
import './App.css';
// custom components
import Person from './Person/Person'

// Button Style
const ButtonStyle = styled.button`
	background-color: ${props => props.showPerson ? 'red' : 'green'};
	color: white;
	border: 1px solid #222;
	padding: 8px;
	cursor: pointer;
	
	&:hover: {
		background-color: ${props => props.showPerson ? 'salmon' : 'lightgreen'};
	}
`;

class App extends Component {
	state = {
		persons: [
			{ id: 'as3a', name: 'Max', age: 28 },
			{ id: 'dsd7', name: 'Manu', age: 29 },
			{ id: 'md32', name: 'Jordan', age: 26 },
		],
		showPerson:false
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons:persons});
	}

	togglePersonHandler = () => {
		this.setState({showPerson: !this.state.showPerson});
	}

	changeNameHandle = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => p.id === id);
		const person =  { ...this.state.persons[personIndex] };
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({
			persons:persons
		});
	}
	render () {
		const { persons, showPerson } = this.state;
		/*const style = {
			backgroundColor: 'green',
			color: 'white',
			border: '1px solid #222',
			padding: '8px',
			cursor: 'pointer',
			':hover': {
				backgroundColor: 'blue'
			}
		}*/
		let classes = [];
		let personList = null;
		if(showPerson){
			//style.backgroundColor = 'red';
			//style[':hover'].backgroundColor = 'black';
			personList = persons.map((person,index) => <Person removePerson={this.deletePersonHandler.bind(this,index)} changed={(event) => this.changeNameHandle(event, person.id)} key={person.id} {...person}/>  )
		}
		if(persons.length <= 3){
			classes.push('red');
		}
		if(persons.length <= 1){
			classes.push('bold');
		}
		return (
			<div className="App">
				<h1>Hello React</h1>
				<p className={classes.join(' ')}>This is working!</p>
				<ButtonStyle showPerson={showPerson} onClick={() => this.togglePersonHandler()}>Switch { showPerson ? 'Off' : 'On'}</ButtonStyle>
				{personList}
			</div>
		
		)
}
	
}

export default Radium(App);

