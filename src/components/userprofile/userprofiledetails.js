import React from 'react';
import userProfileActions from '../../actions/userProfileActions';
import userProfileStore from '../../stores/userProfileStore';
import {ProgressBar} from 'react-bootstrap';

export default class UserProfileDetails extends React.Component {

	constructor(props){
		super(props);
		this.state ={
			userProfile : userProfileStore.findUserByProfileId(this.props.params.id)
		};

		this.getUserProfile=this.getUserProfile.bind(this);
	}

	componentWillMount(){
		userProfileStore.on('userProfileFetched',this.getUserProfile);
	}

	componentWillUnmount(){
		userProfileStore.removeListener('userProfileFetched',this.getUserProfile);
	}

	getUserProfile(){
		this.setState({userProfile : userProfileStore.findUserByProfileId(this.props.params.id)});
	}

	getProjects(projects){
		const projectsArr = projects.map((project,index)=>{
						return (
								<div key={index}>
									<div>
				 				  		<label>{index+1}. &nbsp;Name : {project.name}</label>		                     
				 				 		{project.github && <a className="btn btn-default btn-sm" style={{fontSize:"17px",marginLeft:"5px"}} target="_blank" href={project.github}>
					                     	 <i className="fa fa-github"></i>
					                    </a>}
					                </div>
					                <div>
					               		<label>Description : {project.description}</label>
					                </div>
					                <div>	
					               		{project.url && <label>Url : <a target="_blank" href={project.url}>{project.url}</a></label>}
					        		</div>
					        	</div>
				        		);
		});

		return projectsArr;
	}

	getSkills(skills){
		console.log(skills);
		const skillsArr = skills.map((skill,index)=>{
				return (
					<div key={index}>
						<label>{index+1}. &nbsp;{skill.name}</label>
						<ProgressBar now={skill.proficiency} label={`${skill.proficiency}%`}/>								
			 		</div>);
		});
		return skillsArr;	 				
	}

	render(){
		const {personalinfo,skills,projects} = this.state.userProfile || {};
		const imageUrl = personalinfo && `http://localhost:7845/assets/images/profilepics/${personalinfo.imageurl}.jpg`;

		return (

			 <div id="aboutMe">
			 		<div className="aboutMeBlocks">
			 			{personalinfo && <div id="personalinfo">
				 			<div>
				 				<span className="glyphicon glyphicon-user"></span>
				 				<label className="labelheader">{personalinfo.name}</label>
				 			</div>
				 			<div>
				 				<label>{personalinfo.sex},&nbsp; </label>
				 				<label>{personalinfo.age}</label>
				 			</div>
				 			<div>
				 				<label>{personalinfo.place},&nbsp;</label>
				 				<label>{personalinfo.country}</label>
			 				</div>
			 			</div>
			 		   }
			 		</div>
			 		<div className="aboutMeBlocks" style={{width:"30%"}}>
			 				<div id="userImage">{personalinfo && <img className="img-thumbnail"
			 				 src={imageUrl} alt="user"/>}</div>
					 				{personalinfo && <div id="userdetailicons"><a className="btn btn-primary  btn-sm" style={{fontSize:"17px"}} target="_blank" href={personalinfo.linkedin}>
		                        		<i className="fa fa-linkedin"></i>
		                    		</a>
				                    
				                     <a className="btn btn-default btn-sm" style={{fontSize:"17px"}} target="_blank" href={personalinfo.github}>
				                        <i className="fa fa-github"></i>
				                    </a>
				                    
				                    <a className="btn btn-primary btn-sm" style={{fontSize:"17px"}} target="_blank" href={personalinfo.facebook}>
				                        <i className="fa fa-facebook"></i>
				                    </a></div>
				                	}			 
			 		</div>
			 		<div className="aboutMeBlocks">
			 				{personalinfo && <div id="aboutmedesc">
				 			<div>
				 				<label className="labelheader" style={{display:"block"}}>About Me?</label>
				 				<label style={{display:"block"}}>{personalinfo.aboutme},&nbsp;{personalinfo.role}</label>
				 			</div>
				 		</div>}
			 		</div>
			 		<hr/>
			 		{projects && 
			 			<div id="projects">
			 				 <label className="labelheader">Projects</label>
			 				 {this.getProjects(projects)}
			 			</div>
			 		}
			 		<hr/>
			 		{skills &&
				 		<div id="skills">		 			
				 				<label className="labelheader">Skills</label>
				 				{this.getSkills(skills)}		 				
				 		 </div>
				 	}
				 </div>

			
			

		);

	}

}