import React from 'react';

export default class UserProfile extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

		const {skills,projects,personalinfo}=this.props;

		const imageUrl=`assets/images/profilepics/${personalinfo.imageurl}.jpg`;

			return (<div className="container">
			<div className="row">
				<div className="col-lg-3 col-sm-6">
				 	<div className="card hovercard">
				 		<div className="cardheader"></div>
		                <div className="avatar">
		                    <img alt="" src={imageUrl} />
		                </div>
		                <div className="info">
		                    <div className="title">
		                        <a target="_blank" href="assets/images/profilepics/${personalinfo.imageurl}">{personalinfo.name}</a>
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
		        </div>
		      </div> ); 
	}
}