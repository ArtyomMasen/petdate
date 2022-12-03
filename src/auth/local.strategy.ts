import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {
    super({ passwordField: 'password', usernameField: 'login' });
  }

  async getUserIdByToken(token: string): Promise<void> {
    try {
      const decoded = await this.jwtService.verify(token, { secret: jwtConstants.secret });
      return decoded['sub'];
    } catch (err) {
      throw new BadRequestException({description: 'Token isn\'t valid!'});
    }
  }

  async validate(login: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(login, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
