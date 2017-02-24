import React from 'react';
import ReactDOM from 'react-dom';
import JobDescription from './JobDescription';
import JobStore from '../../stores/jobStore';
import jobActions from '../../actions/jobActions';

export default class ViewJobs extends React.Component{

	constructor(props){
		super(props);
		this.state = {jobs:[]};
		this.getJobs=this.getJobs.bind(this);
	}

	componentWillMount(){
		JobStore.on('jobsFetched',this.getJobs);
	}

	componentDidMount(){
		jobActions.fetchJobs();
	}

	componentWillUnmount(){
		JobStore.removeListener('jobsFetched',this.getJobs);
	}

	getJobs(){
			this.setState({jobs:JobStore.getJobs()});
	}

	render(){
		
		const jobs=this.state.jobs.map((job)=>{
			return <JobDescription key={job._id} jobData={job}/>
		});

		return (
			<div ref={(viewjob)=>this.viewjob=viewjob}>
			{jobs}
			</div>	
		);
	}
}