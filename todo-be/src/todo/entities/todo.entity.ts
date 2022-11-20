// import { type } from 'os';
import { Login } from 'src/login/entities/login.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  Item: string;

  @ManyToOne((type) => Login, (user) => user.list)
  user: Login;
}
