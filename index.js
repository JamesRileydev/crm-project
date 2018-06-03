import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
// if using server the url would go here
mongoose.connect('mongodb://localhost/CRMdb'); 

//bodyparser setup
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


routes(app);

//for serving static files
app.use(express.static('public'));

app.get('/', (req, res)  => 
  res.send(`Node and express server is running on port ${PORT}`) //TEMPLATE STRING
);

app.listen(PORT, () =>
  console.log(`your server is running on ${PORT}`)
);