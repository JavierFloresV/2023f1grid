import express from 'express';
import * as GridCtrl from '../controllers/2023f1grid.controller';

const routes = express.Router();

routes.get('/getGrid',[],GridCtrl.getGrid)

export default routes;
