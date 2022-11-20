import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { Login } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private loginRepo: Repository<Login>,
  ) {}
  async create(createLoginDto: CreateLoginDto) {
    return await this.loginRepo.save({
      Username: createLoginDto.Username,
      Password: createLoginDto.Password,
    });
  }

  findAll() {
    return this.loginRepo.find();
  }

  async findOne(id: number) {
    return await this.loginRepo.findOne({
      where: { id: id },
      relations: ['list'],
    });
  }

  checkUser(username: string, password: string) {
    return this.loginRepo.find({
      where: { Username: username, Password: password },
    });
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return this.loginRepo.update(id, updateLoginDto);
  }

  remove(id: number) {
    return this.loginRepo.delete(id);
  }
}
