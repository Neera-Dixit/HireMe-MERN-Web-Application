import AjaxService from '../services/ajaxServices';
import config from '../config/config';
import {EventEmitter} from 'events';
import Dispatcher from '../dispatcher/dispatcher';

class UserProfileStore extends EventEmitter {
 
  constructor(){
    super();
    this.userProfiles=[];
    this.fetchUserProfileFromDB();
  }

  fetchUserProfileFromDB(){
    AjaxService.get(config.getUserProfileUrl)
    .then((data)=>{
      this.userProfiles=data;
      this.emit('userProfileFetched');
    })
    .catch((err)=>{
      console.log(err);
    });
  }


  getUserProfiles(){
  	return this.userProfiles;
  }

  findUserByProfileId(userProfileId){

    for(var user of this.userProfiles){
        if(user._id === userProfileId){
          return user;
        }
    }
  }

  userProfileActionListener(action){

    switch(action.actionType){
        case 'FETCHUSERPROFILE' : {
            this.fetchUserProfileFromDB();
            break;
        }

        case 'FINDUSERPROFILE' : {
            this.findUserByProfileId(action.userProfileId)
            break;
        }
    }
  }



}

let userProfileStore = new UserProfileStore();
Dispatcher.register(userProfileStore.userProfileActionListener.bind(userProfileStore));
export default userProfileStore;
