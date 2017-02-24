import Dispatcher from '../dispatcher/dispatcher';

let userProfileActions = {

	fetchUserProfile : ()=>{
		Dispatcher.dispatch({
			actionType : "FETCHUSERPROFILE"
		});

	},

	findUserByProfileId : (userProfileId)=>{
		Dispatcher.dispatch({
			actionType : "FINDUSERPROFILE",
			userProfileId
		});
	}
}

export default userProfileActions;