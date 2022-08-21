import { Mode } from 'src/enums/mode.enum';
import { PaperEntity } from 'src/paper/entities/paper.entity';
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm';
//import { TodoStatusEnum } from '../Model/todo.model';

@Entity('user')
export class UserEntity  {

    @PrimaryGeneratedColumn({type: 'int',name: 'user_id'})
    userId: number;

    @Column({ type: 'varchar', length: 50, nullable: false })
    @Unique(['email'])
    email: string;

    @Column({type: 'enum', default: 'DARK', enum:['dark', 'light', 'paper']})
    role: Mode;

    @OneToMany(() => PaperEntity, paper => paper.paperId)
    papers: PaperEntity[];

}