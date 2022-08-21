import { FolderEntity } from 'src/folder/entity/folder.entity';
import { LinkEntity } from 'src/link/entity/link.entity';
import { NoteEntity } from 'src/note/entity/note.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, Index, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity('paper')
//@Index(["paper_id", "user"], { unique: true })
export class PaperEntity  {

    @PrimaryGeneratedColumn({type: 'int',name: 'paper_id'})
    paperId: number;
    
    @Column({ type: 'varchar', length: 80, nullable: false })
    @Unique(['url'])
    url: string;

    @Column('text')
    content: string;

    @Column({type: 'boolean', default: false})
    liked: boolean;

    @ManyToOne((type) => UserEntity, user => user.userId )
    user: UserEntity;
    
    @ManyToMany((type) => LinkEntity, link => link.url)
    @JoinTable()
    links: LinkEntity[];
    
/*
    @OneToMany((type) => NoteEntity, note => note.noteId)
    notes: NoteEntity[];
*/

    @ManyToOne((type) => FolderEntity, folder => folder.folderName)
    folder: FolderEntity;
    
}