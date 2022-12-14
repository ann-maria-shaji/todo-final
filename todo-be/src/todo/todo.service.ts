import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepo: Repository<Todo>,
  ) {}
  create(createTodoDto: CreateTodoDto, todoData: any) {
    return this.todoRepo.save({
      Item: createTodoDto.Item,
      user: todoData,
    });
  }

  findAll() {
    return this.todoRepo.find();
  }

  findOne(id: number) {
    return this.todoRepo.findOne({ where: { id: id } });
  }

  async findUserItem(userData: any) {
    return await this.todoRepo.find({ where: { user: userData } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepo.update(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todoRepo.delete(id);
  }
}
