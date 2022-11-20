import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { LoginService } from 'src/login/login.service';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly loginService: LoginService,
  ) {}

  @Post('additem')
  async create(@Body() createTodoDto: CreateTodoDto) {
    const todoData = await this.loginService.findOne(createTodoDto.userId);
    return this.todoService.create(createTodoDto, todoData);
  }

  @Get('todolist')
  findAll() {
    return this.todoService.findAll();
  }

  @Get('getuseritem/:id')
  async findUserItem(@Param('id') id: string) {
    const userData = await this.loginService.findOne(+id);
    console.log(userData);
    return await this.todoService.findUserItem(userData);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
