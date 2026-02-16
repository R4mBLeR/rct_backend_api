import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { UserService } from 'src/services/user.service';
import { UserController } from 'src/controllers/user.controller';
import { UserRepository } from 'src/repositories/user.repository';

@Module({
  imports: [DatabaseModule], // Важно: импортируем модуль с БД
  providers: [UserService, UserRepository],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
