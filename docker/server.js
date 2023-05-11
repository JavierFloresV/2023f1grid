const express = require('express');
const app = express();


const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://admin:12345@cluster0.dnvlpam.mongodb.net/';
const dbName = 'bootcamp';
const collectionName = '2023f1grids';

const hostName = '0.0.0.0';
const port = 8080;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({limit:'50mb',extended:true}));
app.use('/api/grid',gridRoutes);

export default app;

app.listen(port, hostName);
console.log(`Running on http://${hostName}:${port}`);
