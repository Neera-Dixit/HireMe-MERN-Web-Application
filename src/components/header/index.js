import React from 'react';
import {Link,IndexLink,activeClassName} from 'react-router';

export default class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			  
			  	<nav className="navbar navbar-inverse" id="header">
				  <div className="container-fluid">
				    <div className="navbar-header">
		    	       <Link className="navbar-brand" to="/">
							<img alt="logo" src="/assets/images/logo.png" />
						</Link>
				    </div>
				    <ul className="nav navbar-nav">
				      	<li><IndexLink to="/" activeClassName="routeActive">HireMe!</IndexLink></li>
						<li><Link to="viewjobs" activeClassName="routeActive">View Jobs</Link></li>
						<li><Link to="postjob" activeClassName="routeActive">Post Job</Link></li>
						<li><Link to="aboutus" activeClassName="routeActive">About Us</Link></li>
				    </ul>
				  </div>
				</nav>
			 
		);
	}
}