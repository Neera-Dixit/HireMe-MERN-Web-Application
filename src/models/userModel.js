
let userProfileModel = (mongoose)=>{
	let Schema=mongoose.Schema;

	let userModel = new Schema({
	personalinfo : {
	 name : String,
	 aboutme : String,
	 sex : String,
	 age : Number,
	 place : String,
	 country : String,
	 emailid: String,
	 github : String,
	 facebook : String,
	 linkedin : String
	},
	projects : [
	 {
	   name : String,
	   description : String,
	   github : String,
	   url : String
	 }
	],
	skills : [
	 {
	   name : String,
	   proficiency : Number
	 }
	]
	});

	let userProfile=mongoose.model('users',userModel);

	return userProfile;
};

export default userProfileModel;
