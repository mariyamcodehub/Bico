// import express
const express = require('express');

const cors = require('cors');

// initialize express app
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');
const campaignRouter = require('./routers/campaignRouter');
const utilRouter = require('./routers/utilRouter');

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

app.use( '/user', userRouter );
app.use( '/campaign', campaignRouter );
app.use( '/util', utilRouter );

app.use(express.static("./static/uploads"));

app.listen( port, () => { console.log('server started'); } );