import { Todo } from 'src/todo/entities/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Username: string;

  @Column()
  Password: string;

  @OneToMany((type) => Todo, (items) => items.user)
  list: Todo[];
}
