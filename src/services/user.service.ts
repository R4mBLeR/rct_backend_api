import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async getUserById(id: number) {
    const report = await this.userRepository.findById(id);
    if (!report) {
      throw new NotFoundException(`USER_NOT_FOUND`);
    }
    return report;
  }
  async createUser(userDto: CreateUserDto) {
    const report = await this.userRepository.create({
      email: userDto.email,
      telegramId: userDto.id,
    });
    return report;
  }
}
