import express from "express";
import morgan from "morgan";
import cors from "cors";
import gridRoutes from './routes/2023f1grid.routes';



const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({limit:'50mb',extended:true}));
app.use('/api/grid',gridRoutes);

export default app;
