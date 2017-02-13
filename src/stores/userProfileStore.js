import AjaxService from '../services/ajaxServices';
import config from '../config/config';
import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/dispatcher';

class UserProfileStore extends EventEmitter {
 
  constructor(){
    super();
    this.userProfiles=[];

  	this.getUserProfiles=this.getUserProfiles.bind(this);
    this.fetchUserProfileFromDB=this.fetchUserProfileFromDB.bind(this);
    
    this.fetchUserProfileFromDB();
  }

  fetchUserProfileFromDB(){
    AjaxService.get(config.getUserProfileUrl)
    .then((data)=>{
      this.userProfiles=data;
      //console.log(data);
      this.emit('change');
    })
    .catch((err)=>{
      console.log(err);
    });
  }


  getUserProfiles(){
  	return this.userProfiles;
  }


}

let userProfileStore = new UserProfileStore();
export default userProfileStore;
