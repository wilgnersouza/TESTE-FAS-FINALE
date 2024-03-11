import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('table_produtos')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Categoria: string;

  @Column()
  Descrição: string;

  @Column()
  Tipo: string;

  @Column()
  Categoriadespesa_id: number;

  @Column()
  Unidadecompra_id: number;

  @Column()
  'Data Criação': Date;

  @Column()
  Inativo: boolean;

  @Column()
  'Data Pré Cadastro': string;

  @Column()
  idusuario: number;

  @Column()
  'Pré Cadastro': boolean;

  @Column()
  Saneado: boolean;

}
