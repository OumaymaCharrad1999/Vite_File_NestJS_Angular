import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompteModule } from './compte/compte.module';
import { FileModule } from './file/file.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [FileModule, CompteModule, UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'compte',
    autoLoadEntities: true,
    synchronize: false
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}