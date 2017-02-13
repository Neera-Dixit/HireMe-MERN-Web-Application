import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import ViewJobs from './viewjobs/index';
import AboutUs from './aboutus/index';
import PostJob from './postjob/index';
import App from './app';
import UserProfile from './userprofile/index'; 

export default class AppRouter extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
		  <Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={UserProfile}/>
				<Route path="viewjobs" component={ViewJobs}/>
				<Route path="postjob" component={PostJob}/>
				<Route path="aboutus" component={AboutUs}/>
			</Route>
		   </Router>
		);
	}
}