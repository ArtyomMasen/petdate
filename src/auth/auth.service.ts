import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.userService.getUserLogin(login);
    if (user && user.password === password) {
      const { password, ...secureLogin } = user;
      return secureLogin;
    }
    return null;
  }
}