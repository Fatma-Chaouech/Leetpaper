import { PaperEntity } from 'src/paper/entities/paper.entity';
import { Column, CreateDateColumn, Entity, Index, OneToMany, PrimaryColumn, Unique } from 'typeorm';

@Entity('folder')
//@Index(["folder_name", "papers"], { unique: true })
export class FolderEntity  {
    @PrimaryColumn({ type: 'varchar', length: 30, nullable: false, name: 'folder_name' ,default: 'All'})
    folderName: string;

    @Column({type: 'text'})
    description: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    
    @OneToMany((type) => PaperEntity, paper => paper.paperId)
    papers: PaperEntity[];
    
    
}