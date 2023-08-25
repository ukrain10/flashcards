import { UserService } from '../User/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signUp(userUserName: string, userEmail: string, userPassword: string): Promise<import("./user.model").User>;
    signIn(userEmail: string, userPassword: string): Promise<string>;
}
