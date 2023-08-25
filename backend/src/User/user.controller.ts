import {
    Controller,
    Post,
    Body
  } from '@nestjs/common';
  
  import { UserService } from '../User/user.service';
  
  @Controller('user')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post('signup')
    async signUp(
      @Body('username') userUserName: string,
      @Body('email') userEmail: string,
      @Body('password') userPassword: string,
    ) {
      const generatedId = await this.userService.signUp(
        userUserName,
        userEmail,
        userPassword,
      );
      return generatedId ;
    }
    @Post('signin')
    async signIn(
     
      @Body('email') userEmail: string,
      @Body('password') userPassword: string,
    ) {
      const generatedId = await this.userService.signIn(
        userEmail,
        userPassword,
      );
      return generatedId ;
    }
 
  }