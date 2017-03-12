import React from 'react';
import UserProfile from './UserProfile';
import userProfileStore from '../../stores/userProfileStore';	
import userProfileActions from '../../actions/userProfileActions';

export default class UserProfileContainer extends React.Component{

	constructor(){
		super();
		this.state = {
			userProfiles : []
		};
	}

	componentWillMount(){
		userProfileStore.on('userProfileFetched',this.getUserProfiles);
	}

	componentDidMount(){
		userProfileActions.fetchUserProfile();
	}

	componentWillUnmount(){
		userProfileStore.removeListener('userProfileFetched',this.getUserProfiles);
	}

	getUserProfiles = ()=>{
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