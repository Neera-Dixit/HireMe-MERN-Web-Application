import React from 'react';
import {Link} from 'react-router';

export default class UserProfile extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

		const {skills,projects,personalinfo}=this.props;

		const imageUrl=`http://localhost:7845/assets/images/profilepics/${personalinfo.imageurl}.jpg`;

		const userProfileUrl=`userprofile/${this.props._id}`;

			return (
				  <div id="userProfile">
				 	<div className="card hovercard">
				 		<div className="cardheader"></div>
		                <div className="avatar">
		                    <img alt="" src={imageUrl} />
		                </div>
		                <div className="info">
		                    <div className="title">
		                        <Link to={userProfileUrl}>{personalinfo.name}</Link>
		                    </div>
		                    <div className="desc">{personalinfo.aboutme}</div>
		                    <div className="desc">{personalinfo.role}</div>
		                </div>
		                <div className="bottom">

                    		<a className="btn btn-primary  btn-sm" style={{fontSize:"17px"}} target="_blank" href={personalinfo.linkedin}>
                        		<i className="fa fa-linkedin"></i>
                    		</a>
		                    
		                     <a className="btn btn-default btn-sm" style={{fontSize:"17px"}} target="_blank" href={personalinfo.github}>
		                        <i className="fa fa-github"></i>
		                    </a>
		                    
		                    <a className="btn btn-primary btn-sm" style={{fontSize:"17px"}} target="_blank" href={personalinfo.facebook}>
		                        <i className="fa fa-facebook"></i>
		                    </a>

		                </div>
		            </div>
		           </div>

		       ); 
	}
}