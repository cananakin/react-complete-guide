import React, { Component } from 'react';
import Layout from '../components/Layouts/Layout'
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder'

// css
import classes from './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render() {
		
		return (
			<div className={classes.App}>
				<Layout>
					<BurgerBuilder />
				</Layout>
			</div>
		)
	}
}

export default App;

