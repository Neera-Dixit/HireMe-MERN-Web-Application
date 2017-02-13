
let jobDescModel = (mongoose)=>{
	let Schema=mongoose.Schema;

	let jobModel = new Schema({
	 name : String,
	 companyname : String,
	 location : String,
	 experience : String,
	 description : String
	});

	let userProfile=mongoose.model('jobs',jobModel);

	return userProfile;
};

export default jobDescModel;
