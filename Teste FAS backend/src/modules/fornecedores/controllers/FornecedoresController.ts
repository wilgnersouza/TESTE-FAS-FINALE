import { Request, Response } from 'express';
import ListFornecedoresService from '../services/ListFornecedoresService';

export default class FornecedoresController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listFornecedroes = new ListFornecedoresService();

    const fornecedores = await listFornecedroes.execute();

    return response.json(fornecedores);
  }

}
