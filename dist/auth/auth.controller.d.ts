import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
        username: string;
    }, res: Response): Promise<void>;
    login(body: {
        email: string;
        password: string;
    }, res: Response): Promise<void>;
    refreshToken(body: {
        refreshToken: string;
        userId: string;
    }, res: Response): Promise<void>;
}
