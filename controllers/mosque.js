import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
const bodyParser = bodyParser.json();;

router.get('/add', (req, res) => {
    const body = req.body;



  res.send('Hello World');
});