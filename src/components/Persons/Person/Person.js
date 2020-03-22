import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'


import './Person.scss'



class Person extends Component  {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                { this.context.authenticated ? <p> Authenticated! </p> : <p> Please log in </p> }
                
                <p onClick={this.props.removePerson} >I'm { this.props.name } and I am { this.props.age } years old!</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    //ref={((inputEl) => { this.inputElement = inputEl} )}
                    ref={this.inputElementRef}
                    onChange={this.props.changed} 
                    value={ this.props.name }/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func 
}

export default withClass(Person, 'Person');


