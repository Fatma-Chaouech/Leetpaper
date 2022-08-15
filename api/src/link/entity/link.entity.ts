import { PaperEntity } from 'src/paper/entities/paper.entity';
import { Column, Entity, ManyToMany, PrimaryColumn, Unique } from 'typeorm';

@Entity('link')
export class LinkEntity  {
    @PrimaryColumn({ type: 'varchar', length: 100})
    url: string;

    @ManyToMany(() => PaperEntity, paper => paper.url)
    papers: PaperEntity[];
}