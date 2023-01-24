import { Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class TimestampEntity {
  @CreateDateColumn({update:false})
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()  
  deletedAt: Date;
}