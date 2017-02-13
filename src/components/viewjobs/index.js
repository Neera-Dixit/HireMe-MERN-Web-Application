import React from 'react';
import ReactDOM from 'react-dom';
import JobDescription from './JobDescription';
import JobStore from '../../stores/jobStore';

export default class ViewJobs extends React.Component{

	constructor(props){
		super(props);
		console.log("changed");
		this.state = {jobs:JobStore.getJobs()};
		this.getJobs=this.getJobs.bind(this);
	}

	componentDidMount(){
		JobStore.on('change',this.getJobs);
	}

	componentWillUnMount(){
		JobStore.removeListener('change',this.getJobs);
	}

	getJobs(){
			this.setState({jobs:JobStore.getJobs()});
	}

	render(){

		console.log("jobs :"+this.state.jobs);
		
		const jobs=this.state.jobs.map((job)=>{
			console.log(job);
			return <JobDescription key={job._id} jobData={job}/>
		});

		return (
			<div ref={(viewjob)=>this.viewjob=viewjob}>
			{jobs}
			</div>	
		);
	}
}