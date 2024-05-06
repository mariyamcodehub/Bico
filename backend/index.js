// import express
const express = require('express');

const cors = require('cors');

// initialize express app
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const campaignRouter = require('./routers/campaignRouter');
const utilRouter = require('./routers/utilRouter');
const feedbackRouter = require('./routers/feedbackRouter')
const brandRouter = require('./routers/brandRouter')
const enrollRouter = require('./routers/enrollRouter')

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use( '/user', userRouter );
app.use( '/campaign', campaignRouter );
app.use( '/feedback', feedbackRouter );
app.use( '/util', utilRouter );
app.use('/brand', brandRouter);
app.use('/enroll', enrollRouter);

app.use(express.static("./static/uploads"));

app.listen( port, () => { console.log('server started'); } );