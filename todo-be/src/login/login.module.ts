import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { Login } from './entities/login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { TodoController } from 'src/todo/todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Login])],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
