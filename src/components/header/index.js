import React from 'react';
import {Link,IndexLink,activeClassName} from 'react-router';

export default class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			  
			  	<nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
		    	       <Link className="navbar-brand" to="/">
							<img alt="logo" src="assets/images/logo.png" />
						</Link>
				    </div>
				    <ul className="nav navbar-nav">
				      	<li><IndexLink to="/">HireMe!</IndexLink></li>
						<li><Link to="viewjobs">View Jobs</Link></li>
						<li><Link to="postjob">Post Job</Link></li>
						<li><Link to="aboutus">About Us</Link></li>
				    </ul>
				  </div>
				</nav>
			 
		);
	}
}