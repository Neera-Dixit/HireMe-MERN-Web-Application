let profileService = {

	getProfileInfo : (userProfile)=>{

		return new Promise((success,error)=>{
			userProfile.find({},(err,data)=>{

				if(err){
					error(err);
				}
				else{
					success(data);
				}
			})
		})
		
	},
	postProfileInfo : (userProfile,data)=>{
		console.log(data);
		return new Promise((success,error)=>{
			new userProfile(data).save((err,data)=>{

				if(err){
					error(err);
				}
				else{
					success(data);
				}
			});
		});
		
	},
	getProfileInfoById : (userProfile,id)=>{

		return new Promise((success,error)=>{
			userProfile.findById(id,(err,data)=>{

				if(err){
					error(err);
				}
				else{
					success(data);
				}
			})
		})
	},
	updateProfileInfoById : (userProfile,id,data)=>{

		return new Promise((success,error)=>{
			userProfile.findById(id,(err,retrData)=>{

				if(err){
					error(err);
				}
				else{

					for(let key in data){
						retrData[key]=data[key];
					}
					retrData.save();
					success(retrData);
				}
			})
		})
	}

};

export default profileService;