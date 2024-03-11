import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public async findByName(): Promise<Product[]> {
    return this.find();
  }
}
