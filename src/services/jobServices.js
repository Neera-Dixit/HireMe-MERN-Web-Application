let jobService = {

	getJobs : (job)=>{

		return new Promise((success,error)=>{
			job.find({},(err,data)=>{
				if(err){
					error(err);
				}
				else{
					success(data);
				}
			});
		});

	},

	addJobs : (job,data)=>{

		return new Promise((success,error)=>{
			new job(data).save((err,data)=>{
				if(err){
					error(err);
				}
				else{
					success(data);
				}
			})
		});

	}
};

export default jobService;