import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('table_fornecedores')
export default class Fornecedores {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  agencia: string;

  @Column()
  ativo: boolean;

  @Column()
  bairro: string;

  @Column()
  banco: string;

  @Column()
  cep: number;

  @Column()
  cnpj: string;

  @Column()
  conta: string;

  @Column()
  contato: string;

  @Column()
  cpf: number;

  @Column()
  email: string;

  @Column()
  endereco: string;

  @Column()
  inscricao_estadual: number;

  @Column()
  nome_fantasia: string;

  @Column()
  observacao: string;

  @Column()
  pis: string;

  @Column()
  razao_social: string;

  @Column()
  telefone: string;

  @Column()
  tipo: number;

  @Column()
  cidade_id: number;

  @Column()
  estado_id: number;

  @Column()
  atividade: string;
}
