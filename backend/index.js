import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/dbConneciton.js';
import authRoute from './routes/auth.routes.js'
import gigRoute from './routes/gig.routes.js'
import orderRoute from './routes/order.routes.js'
import conversationRoute from './routes/conversation.routes.js'
import reviewRoute from './routes/review.routes.js'
import userRoute from './routes/user.routes.js'
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoute);
// app.use("/api/gigs",gigRoute);
// app.use("/api/orders",orderRoute);
// app.use("/api/conversations",conversationRoute);
// app.use("/api/reviews",reviewRoute);
app.use("/api/users",userRoute);
app.listen(4000,()=>{
    dbConnect();
    console.log("server is running");
})