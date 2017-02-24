import React from 'react';

export default class JobDescription extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

		const {name,companyname,location,experience,description}=this.props.jobData;

		return (
	       <div className="panel panel-white post panel-shadow">
	            <div className="post-heading">
	                <div className="pull-left image">
	                    <img src="assets/images/jobpost.jpg" className="img-circle avatar" alt="user profile image" />
	                </div>
	                <div className="pull-left meta">
	                    <div className="title h5">
	                        <b>{name}</b> made a post                     
	                    </div>
	                    <h6 className="text-muted time">1 minute ago</h6>
	                </div>
	            </div> 
	            <div className="post-description">
	            	<div>
	            	 <b>Company</b> : {companyname}
	            	</div>
	            	<div>
	            	 <b>Location</b> : {location}
	            	</div> 
	            	<div>
	            	  <b>Experience</b> : {experience}
	            	</div> 
	                <div><b>Job Description</b> : <p>{description}</p>
	                </div>
	            </div>
	        </div>
		);
	}
}