import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import jobActions from '../../actions/jobActions';

export default class PostJob extends React.Component{

	constructor(props){
		super(props);
		this.state={
			open:true
		};
		this.closeModal=this.closeModal.bind(this);
    this.postNewJob=this.postNewJob.bind(this);
	}

	closeModal(){
		 browserHistory.push('/');
	}

  postNewJob(e){
    e.preventDefault(); 
    let jobData={
      "name" : this.postName.value,
      "companyname" : this.compName.value,
      "location" : this.joblocation.value,
      "experience" : this.experience.value,
      "description" : this.jobdesc.value
    };
    jobActions.postNewJob(jobData);
    browserHistory.push('/viewjobs');
    
  }

	render(){

    return (
      <div>
        <Modal show={this.state.open} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title style={{textAlign:"center"}}>Post Job!</Modal.Title>
          </Modal.Header>

          <Modal.Body>
          	<form onSubmit={this.postNewJob} className="form-horizontal" id="jobPostForm" role="form"> 
              
                        <div className="form-group">
                            <label htmlFor="compName" className="col-sm-2 control-label">Your Name</label>
                            <div className="col-sm-10">                              
                                  <input type="text" className="form-control" name="postName" id="postName" ref={(input)=>this.postName=input} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="compName" className="col-sm-2 control-label">Company Name</label>
                            <div className="col-sm-10">                              
                                  <input type="text" className="form-control" name="compName" id="compName" ref={(input)=>this.compName=input} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="joblocation" className="col-sm-2 control-label">Job Location</label>
                            <div className="col-sm-10">   
                                  <input type="text" className="form-control" name="joblocation" id="joblocation" ref={(input)=>this.joblocation=input} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="experience" className="col-sm-2 control-label">Experience</label>
                            <div className="col-sm-10">                   
                                  <input type="text" className="form-control" name="experience" id="experience" ref={(input)=>this.experience=input} required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="jobdesc" className="col-sm-2 control-label">Job Description</label>
                            <div className="col-sm-10">
                              <textarea className="form-control" name="jobdesc" id="jobdesc" rows="5" ref={(input)=>this.jobdesc=input} required></textarea>
                            </div>
                        </div>     
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">                    
                                <button className="btn btn-success btn-circle text-uppercase" type="submit" id="submitComment"><span className="glyphicon glyphicon-send"></span> Summit comment</button>
                            </div>
                        </div>       
                    </form>
          </Modal.Body>

        </Modal>
      </div>
    );
	}
}