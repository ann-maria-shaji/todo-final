import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginService } from 'src/login/login.service';
import { Login } from 'src/login/entities/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Login])],
  controllers: [TodoController],
  providers: [TodoService, LoginService],
})
export class TodoModule {}
