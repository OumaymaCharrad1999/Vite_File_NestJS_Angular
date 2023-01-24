import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entity/user.entity';
import { LoginCredentialsDto } from './dto/loginCredentials.dto';
import { UserSubscribeDto } from './dto/userSubscribe.dto'; 

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jwtService: JwtService) {}

    async register(userSubscribeDto: UserSubscribeDto): Promise<Partial<UserEntity>> {
      const user = this.userRepository.create({...userSubscribeDto});
      user.salt = await bcrypt.genSalt();
      user.password = await bcrypt.hash(user.password, user.salt);
      try { await this.userRepository.save(user);} 
      catch (e) {throw new ConflictException("The E-mail must be unique!");}
      return {
          id: user.id,
          email: user.email,
      };
    }  

  async login(credentials: LoginCredentialsDto)  {
    const {email, password} = credentials;
    const user = await this.userRepository.createQueryBuilder("user")
      .where("user.email = :email or user.password = :email", {email})
      .getOne();
    if (!user) throw new NotFoundException('Wrong E-mail or password!');
    const hashedPassword = await bcrypt.hash(password, user.salt);
    if (hashedPassword === user.password) {
      const payload = {
        email: user.email
      };
      const jwt = this.jwtService.sign(payload);
      return {
        "access_token" : jwt
      };
    } 
    else {
      throw new NotFoundException('Wrong E-mail or password!');
    }
  }
}