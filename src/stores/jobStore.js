import AjaxService from '../services/ajaxServices';
import config from '../config/config';
import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/dispatcher';

class JobStore extends EventEmitter {
 
  constructor(){
    super();
    this.jobs=[];

  	this.getJobs=this.getJobs.bind(this);
    this.fetchJobsFromDB=this.fetchJobsFromDB.bind(this);
    this.postJobsToDB=this.postJobsToDB.bind(this);
    this.fetchJobsFromDB();
  }

  fetchJobsFromDB(){
    AjaxService.get(config.getJobsUrl)
    .then((data)=>{
      this.jobs=data;
      this.emit('change');
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  postJobsToDB(jobData){
    AjaxService.post(config.getJobsUrl,jobData)
    .then((data)=>{
      this.jobs.push(data);
      this.emit('change');
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  getJobs(){
  	return this.jobs;
  }

  jobActionsListener(actionObj){

    switch(actionObj.actionType){
      case 'NewJobPost' : {
                              this.postJobsToDB(actionObj.jobData);
                              break;
                           }
    }

  }

}

let jobStore=new JobStore();
Dispatcher.register(jobStore.jobActionsListener.bind(jobStore));
export default jobStore;
