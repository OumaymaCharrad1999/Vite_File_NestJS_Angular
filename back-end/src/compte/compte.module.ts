import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompteEntity } from './entity/compte.entity';
import { CompteService } from './compte.service';
import { CompteController } from './compte.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompteEntity])],
  controllers: [CompteController],
  providers: [CompteService],
})
export class CompteModule {}