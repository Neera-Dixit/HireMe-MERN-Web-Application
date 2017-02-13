import React from 'react';
import UserProfile from './UserProfile';
import userProfileStore from '../../stores/userProfileStore';	

export default class UserProfileContainer extends React.Component{

	constructor(){
		super();
		this.state={userProfiles:userProfileStore.getUserProfiles()};

		this.getUserProfiles=this.getUserProfiles.bind(this);
	}

	componentWillMount(){
		userProfileStore.on('change',this.getUserProfiles);
	}

	componentWillUnMount(){
		userProfileStore.removeListener('change',this.getUserProfiles);
	}

	getUserProfiles(){
		this.setState({userProfiles : userProfileStore.getUserProfiles()});
	}

	render(){

		const userProfiles = this.state.userProfiles.map((userProfile)=>{
			return <UserProfile key={userProfile._id} {...userProfile} />;
		});

		return (
			<div>
				{userProfiles}
			</div>
		);

	}
}