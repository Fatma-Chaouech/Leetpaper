import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExtensionModule } from './extension/extension.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DataSource } from 'typeorm';
import { UserEntity } from './user/entities/user.entity';
import { PaperEntity } from './paper/entities/paper.entity';
import { LinkEntity } from './link/entity/link.entity';
import { NoteEntity } from './note/entity/note.entity';
import { FolderEntity } from './folder/entity/folder.entity';
import { PaperModule } from './paper/paper.module';
import { LinkModule } from './link/link.module';
import { NoteModule } from './note/note.module';
import { FolderModule } from './folder/folder.module';

@Module({
  imports: [ExtensionModule,
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: '',
              database: 'leetpaper',
              entities: [UserEntity, PaperEntity, LinkEntity, NoteEntity, FolderEntity],
              synchronize: true,
              autoLoadEntities: true,
            }),
            UserModule,
            PaperModule,
            LinkModule,
            NoteModule,
            FolderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
