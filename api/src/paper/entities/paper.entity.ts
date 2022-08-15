import { FolderEntity } from 'src/folder/entity/folder.entity';
import { LinkEntity } from 'src/link/entity/link.entity';
import { NoteEntity } from 'src/note/entity/note.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, Unique } from 'typeorm';

@Entity('paper')
export class PaperEntity  {
    @PrimaryColumn({type: 'text'})
    url: string;

    @Column({type: 'text'})
    content: string;

    @Column({type: 'boolean', default: false})
    liked: boolean;

    @PrimaryColumn()
    @ManyToOne(() => UserEntity, user => user.email )
    @JoinColumn({ name: 'user' })
    user: UserEntity;
    
    @ManyToMany(() => LinkEntity, link => link.url)
    @JoinTable()
    links: LinkEntity[];

    @OneToMany(() => NoteEntity, note => note.highlighted_text)
    notes: NoteEntity[];


    @ManyToOne(() => FolderEntity, folder => folder.foder_name)
    folder: FolderEntity;
}