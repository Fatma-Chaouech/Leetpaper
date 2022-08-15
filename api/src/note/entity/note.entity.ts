import { PaperEntity } from 'src/paper/entities/paper.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('note')
export class NoteEntity  {
    @PrimaryColumn({ type: 'text'})
    highlighted_text: string;

    @Column({type: 'text'})
    note: string;
    
    @PrimaryColumn()
    @ManyToOne(() => PaperEntity, paper => paper.notes)
    paper: PaperEntity;
    
}