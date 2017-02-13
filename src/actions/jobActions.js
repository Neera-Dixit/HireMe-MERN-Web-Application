import Dispatcher from '../dispatcher/dispatcher';

let jobActions = {

	postNewJob : (jobData)=>{
		Dispatcher.dispatch({
			actionType : "NewJobPost",
			jobData
		});

	}
}

export default jobActions;