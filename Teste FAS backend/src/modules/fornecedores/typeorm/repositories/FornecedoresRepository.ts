import { EntityRepository, Repository } from 'typeorm';
import Fornecedores from '../entities/Fornecedores';

@EntityRepository(Fornecedores)
export class FornecedoresRepository extends Repository<Fornecedores> {
  public async findByName(): Promise<Fornecedores[]> {
    return this.find();
  }
}
