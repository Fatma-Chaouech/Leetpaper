import { Mode } from 'src/enums/mode.enum';
import { PaperEntity } from 'src/paper/entities/paper.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
//import { TodoStatusEnum } from '../Model/todo.model';

@Entity('user')
export class UserEntity  {
    @PrimaryColumn({type: 'varchar'})
    email: string;

    @Column({type: 'enum', length: 20, default: 'DARK'})
    role: Mode;

    @OneToMany(() => PaperEntity, paper => paper.user)
    papers: PaperEntity[];

}