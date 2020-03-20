import React from 'react'
import Person from './Person/Person'

const Persons = (props) => props.persons.map((person, index) => {
    return (
        <Person 
            key={person.id}
            removePerson={() => props.clicked( index )} 
            changed={( event ) => props.changed( event, person.id )} 
            {...person} />
    );
});

export default Persons
