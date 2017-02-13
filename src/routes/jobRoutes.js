import express from 'express';
import jobService from '../services/jobServices';

let expressRouter=express.Router();

let jobRoutes=(logger,job)=>{

	expressRouter.route('/')
			     .get((req,res)=>{
			  		jobService.getJobs(job)
			  		.then((data)=>{
			  			res.status(200).send(data);
			  		})
			  		.catch((err)=>{
			  			res.status(404).send(err);
			  		});

	    		})
			    .post((req,res)=>{
			    	console.log(req.body);
			  		jobService.addJobs(job,req.body)
			  		.then((data)=>{
			  			res.status(200).send(data);
			  		})
			  		.catch((err)=>{
			  			res.status(404).send(err);
			  		});

	    		});

    return expressRouter;
}

export default jobRoutes;

