import React from 'react';
import {Link,IndexLink} from 'react-router';

export default class Footer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
				<div id="footer">
					<label>&copy; HireMe.com</label>
				</div>
		);
	}
}