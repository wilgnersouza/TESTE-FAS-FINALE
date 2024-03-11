import { Router } from 'express';
import FornecedoresController from '../controllers/FornecedoresController';

const fornecedoresRouter = Router();
const fornecedoresController = new FornecedoresController();

fornecedoresRouter.get('/', fornecedoresController.index);

export default fornecedoresRouter;
