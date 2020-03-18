import React from 'react'
import styled from 'styled-components'
//import './Person.scss'

const StyleDiv = styled.div`
    width: '60%';
    margin: 16px auto;
    border: 1px solid #ddd;
    padding: 16px;
    background: #efefef;
    box-shadow: 1px 2px 16px #ddd;
    text-align: center;
    @media (min-width: 500px) {
        width: '450px'
    }
`;

const Person = (props) => {

    return (
        <StyleDiv>
            <p onClick={props.removePerson} >I'm { props.name } and I am { props.age } years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </StyleDiv>
    )
}

export default Person;


