import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  private repo: Repository<User>;

  constructor(@Inject('DATA_SOURCE') private dataSource: DataSource) {
    this.repo = this.dataSource.getRepository(User);
  }

  async findAll(): Promise<User[]> {
    return await this.repo.find();
  }

  async findById(id: number): Promise<User | null> {
    return await this.repo.findOne({ where: { id } });
  }

  async create(userData: Partial<User>): Promise<User> {
    const user = this.repo.create(userData);
    return await this.repo.save(user);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
