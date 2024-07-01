import express from 'express'
import bodyParser from 'body-parser'
import connect from './config/database.js'
import apiRoutes from './routes/index.js'
import passport from 'passport'
import { passportAuth } from './config/jwt-middleware.js'
const app = express();
const PORT=3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api',apiRoutes);


app.listen(PORT,async()=>{
    console.log(`Server started on port ${PORT}`);
    await connect();
    console.log('MongoDB connected');
    
    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0,10);
    // const users = await userRepo.getAll(0,10);
    // // const user = await userRepo.create({
    // //     email: 'abc@adm.com',
    // //     password: '123456',
    // //     name : 'Abhishek'
    // // });
    // const likeSer= new LikeService();
    // await likeSer.toggleLike(tweets[0].id,'Tweet',users[0].id);



})