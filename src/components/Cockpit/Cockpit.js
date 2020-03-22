import React, { useEffect, useRef, useContext } from 'react'
import AuthContext from '../../context/auth-context'

import classes from './Cockpit.css'

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext); 
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        /*const timer = setTimeout(() => {
            alert('saved');
        }, 1000);*/
        toggleBtnRef.current.click()
        return () => {
            //clearTimeout(timer)
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, [])
    
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
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Switch {props.showPerson ? 'Off' : 'On'}
            </button>
            {  <button onClick={authContext.login}>Log in </button>}
        </div>
    )
}

export default React.memo(Cockpit)
