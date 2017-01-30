import mongoose from 'mongoose';
import config from '../../config/config';

let connMongDB = (logger)=>{

mongoose.connection.on('connected',()=>{
	logger.log('info','Connected to mongo DB');
	console.log('Connected to mongo DB');
});

mongoose.connection.on('disconnected',()=>{
	logger.log('info','Disconnected to mongo DB');
	console.log('Disconnected to mongo DB');
});

mongoose.connection.on('error',()=>{
	logger.log('error','Error Connecting to mongo DB');
	console.log('Error Connecting to mongo DB');
});

mongoose.connect(`${config.URL}${config.DATABASE_NAME}`);

 return mongoose;
};


export default connMongDB;