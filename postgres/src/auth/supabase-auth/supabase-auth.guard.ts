import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<Request & { user?: jwt.JwtPayload }>();

    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException(
        'Missing or invalid Authorization header',
      );
    }

    const token = authHeader.split(' ')[1];

    const jwtSecret = this.configService.get<string>('SUPABASE_JWT_SECRET');

    if (!jwtSecret) {
      throw new Error('SUPABASE_JWT_SECRET is not configured');
    }

    try {
      const decoded = jwt.verify(token, jwtSecret);

      if (typeof decoded === 'string') {
        throw new UnauthorizedException('Invalid JWT payload');
      }

      request.user = decoded;

      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid JWT token');
    }
  }
}
