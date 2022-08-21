import { PaperEntity } from 'src/paper/entities/paper.entity';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('note')
export class NoteEntity  {

    @PrimaryGeneratedColumn({type: 'int'})
    noteId: number;

    @Column({ type: 'varchar'})
    highlightedText: string;

    @Column('text')
    note: string;
    /*
    @PrimaryColumn()
    @ManyToOne((type) => PaperEntity, paper => paper.paperId)
    paper: PaperEntity;
    */
}