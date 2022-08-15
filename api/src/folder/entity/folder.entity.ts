import { PaperEntity } from 'src/paper/entities/paper.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, Unique } from 'typeorm';

@Entity('folder')
export class FolderEntity  {
    @PrimaryColumn({ type: 'varchar', length: 30, nullable: false })
    foder_name: string;

    @Column({type: 'text'})
    description: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    created_at: Date;

    @PrimaryColumn()
    @OneToMany(() => PaperEntity, paper => paper.url)
    papers: PaperEntity[];
}