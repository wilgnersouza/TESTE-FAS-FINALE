import { getCustomRepository } from 'typeorm';
import { FornecedoresRepository } from '../typeorm/repositories/FornecedoresRepository';
import Fornecedores from '../typeorm/entities/Fornecedores';

export default class ListFornecedoresService {
  public async execute(): Promise<Fornecedores[]> {
    const fornecedoresRepository = getCustomRepository(FornecedoresRepository);

    const fornecedores = fornecedoresRepository.find();

    return fornecedores;
  }
}
