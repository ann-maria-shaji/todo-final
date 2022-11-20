import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Login } from './login/entities/login.entity';
import { LoginModule } from './login/login.module';
import { Todo } from './todo/entities/todo.entity';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    LoginModule,
    TodoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'todo',
      entities: [Login, Todo],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
