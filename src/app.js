import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongooseDBUtil from './utils/database/db_util.js';
import logger from './utils/logger/index';
import winstonReqLogger from './middleware/winstoneRequestLogger';
import profileRouter from './routes/profileRoutes.js';
import jobRouter from './routes/jobRoutes.js';
import userProfileModel from './models/userModel';
import jobDescModel from './models/jobModel';

let app = express();
let port= process.env.port || 7845;
let mongoose=mongooseDBUtil(logger);
let userProfile=userProfileModel(mongoose);
let jobDesc=jobDescModel(mongoose);

app.use(express.static(path.join(__dirname+`/../public/`)));
app.use(winstonReqLogger(logger));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/profile',profileRouter(logger,userProfile));
app.use('/jobs',jobRouter(logger,jobDesc));

app.set(`views`,`./src/views`);

app.get(`*`,(req,res)=>{
	logger.log('info','success');
    res.render(`index.ejs`,{});
});

app.listen(port,()=>{
    console.log(`Express Server Listening at ${port}`);
})