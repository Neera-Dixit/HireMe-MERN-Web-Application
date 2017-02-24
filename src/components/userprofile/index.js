import React from 'react';
import UserProfile from './UserProfile';
import userProfileStore from '../../stores/userProfileStore';	
import userProfileActions from '../../actions/userProfileActions';
import CircularProgressbar from 'react-circular-progressbar';

export default class UserProfileContainer extends React.Component{

	constructor(){
		super();
		this.state = {
			userProfiles : userProfileStore.getUserProfiles()
		};
		this.getUserProfiles=this.getUserProfiles.bind(this);
	}

	componentWillMount(){
		userProfileStore.on('userProfileFetched',this.getUserProfiles);
	}

	componentWillUnmount(){
		userProfileStore.removeListener('userProfileFetched',this.getUserProfiles);
	}

	getUserProfiles(){
		this.setState({userProfiles : userProfileStore.getUserProfiles()});
	}

	render(){
		const userProfiles = this.state.userProfiles.map((userProfile)=>{
			return <UserProfile key={userProfile._id} {...userProfile} />;
		});
		//<CircularProgressbar percentage={60}/>
		return (

			<div>
				{userProfiles}
			</div>
		);

	}
}