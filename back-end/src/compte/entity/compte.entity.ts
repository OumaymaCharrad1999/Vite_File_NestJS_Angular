import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from 'typeorm';
import { TimestampEntity } from './timestamp.entity';

@Entity()
export class CompteEntity extends TimestampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cin: string;

  @Column()
  phoneNumber: number;

  @Column()
  email: string;

  @Column()
  compagny: string;

  @Column()
  taxIdentificationNumber: string;

  @Column()
  password: string;
  
  @DeleteDateColumn()
  del : any;
}