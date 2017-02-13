import React from 'react';
import Header from './header/index';
import Footer from './footer/index';

export default class App extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
				<div>
					<Header/>
					 <div id="content">
					  {this.props.children}
					 </div>
					<Footer/>
				</div>
		);
	}
}