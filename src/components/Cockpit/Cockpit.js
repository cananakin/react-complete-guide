import React from 'react'

import classes from './Cockpit.css'

const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPerson) 
	    btnClass = classes.Red;
    
    if (props.persons.length <= 3) {
        assignedClasses.push(classes.red);
    }
    
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hello React</h1>
            <p className={assignedClasses.join(' ')}>This is working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Switch {props.showPerson ? 'Off' : 'On'}
            </button>
        </div>
    )
}

export default Cockpit;
