import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        console.log('hi', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should');
        return nextProps.persons !== this.props.persons
    }

    render() {
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    key={person.id}
                    removePerson={() => this.props.clicked(index)}
                    changed={(event) => this.props.changed(event, person.id)}
                    {...person}
                />
            );
        })
    }
}
export default Persons;
