import Dispatcher from '../dispatcher/dispatcher';

let jobActions = {

	postNewJob : (jobData)=>{
		Dispatcher.dispatch({
			actionType : "POSTNEWJOB",
			jobData
		});

	},

	fetchJobs : ()=>{
		Dispatcher.dispatch({
			actionType : "FETCHJOBS"
		});

	}
}

export default jobActions;