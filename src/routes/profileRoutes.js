import express from 'express';
import profileService from '../services/profileServices';

let expressRouter=express.Router();

let profileRouter=(logger,userProfile)=>{

	expressRouter.route('/')
 			 .get((req,res)=>{
 			 	profileService.getProfileInfo(userProfile)
 			 	.then((data)=>{
 			 		res.status(200).send(data);
 			 	})
 			 	.catch((err)=>{
 			 		res.status(404).send(err);
 			 	})
 			 })
 			 .post((req,res)=>{
 			 	console.log(req.body);
 			 	profileService.postProfileInfo(userProfile,req.body)
 			 	.then((data)=>{
 			 		res.status(200).send(data);
 			 	})
 			 	.catch((err)=>{
 			 		res.status(404).send(err);
 			 	})
 			 });

	expressRouter.route('/:id')
 			 .get((req,res)=>{
 			 	profileService.getProfileInfoById(userProfile,req.params.id)
 			 	.then((data)=>{
 			 		res.status(200).send(data);
 			 	})
 			 	.catch((err)=>{
 			 		res.status(404).send(err);
 			 	})
 			 })
 			 .patch((req,res)=>{
 			 	profileService.updateProfileInfoById(userProfile,req.params.id,req.body)
 			 	.then((data)=>{
 			 		res.status(200).send(data);
 			 	})
 			 	.catch((err)=>{
 			 		res.status(404).send(err);
 			 	})
 			 });

 	return expressRouter;
};

export default profileRouter;