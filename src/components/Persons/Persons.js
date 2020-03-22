import React, { Component } from 'react'
import Person from './Person/Person'
import AuthContext from '../../context/auth-context'


class Persons extends Component {
    /*static getDerivedStatefromProps(props, state) {
        console.log('[Persons.js] getDerivedStatefromProps');
        return state;
    }*/

    /*componentWillReceiveProps(props) {
        console.log('[Persons.js] componentWillReceiveProps', props);
        
    }*/

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons)
            return true
        else
            return false;
        
    }*/

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'snapshot' }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...')
        return <AuthContext.Consumer>
            {
                (context) => this.props.persons.map((person, index) => {
                    return (
                        <Person
                            key={person.id}
                            removePerson={() => this.props.clicked(index)}
                            changed={(event) => this.props.changed(event, person.id)}
                            {...person}
                            isAuth={this.props.authenticated}
                        />

                    );
                })
            }
        </AuthContext.Consumer>
    }
}
export default Persons
