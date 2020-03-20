import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    /*static getDerivedStatefromProps(props, state) {
        console.log('[Persons.js] getDerivedStatefromProps');
        return state;
    }*/

    componentWillReceiveProps(props) {
        console.log('[Persons.js] componentWillReceiveProps', props);
        
    }

    shouldComponentUpdate() {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }
    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) => {
            return (
                <Person 
                    key={person.id}
                    removePerson={() => this.props.clicked( index )} 
                    changed={( event ) => this.props.changed( event, person.id )} 
                    {...person} />
            );
        });
    }
}
export default Persons
