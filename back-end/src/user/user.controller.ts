import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginCredentialsDto } from './dto/loginCredentials.dto';
import { UserSubscribeDto } from './dto/userSubscribe.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  register(@Body() userSubscribeDto: UserSubscribeDto) {
    return this.userService.register(userSubscribeDto);
  }
  
  @Post('login')
  login(@Body() loginCredentialsDto: LoginCredentialsDto) {
    return this.userService.login(loginCredentialsDto);
  }
}