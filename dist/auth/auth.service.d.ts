import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly prisma;
    constructor(jwtService: JwtService, prisma: PrismaService);
    createNewUser(username: string, email: string, password: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        picture: string | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findUserByEmail(email: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        picture: string | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        picture: string | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    generateAccessToken(user: any): Promise<string>;
    generateRefreshToken(userId: string): Promise<string>;
    validateRefreshToken(userId: string, refreshToken: string): Promise<{
        id: string;
        username: string;
        email: string;
        password: string;
        picture: string | null;
        refreshToken: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
