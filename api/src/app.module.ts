import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExtensionModule } from './extension/extension.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PaperModule } from './paper/paper.module';
import { FolderModule } from './folder/folder.module';
import { NoteController } from './note/note.controller';
import { NoteService } from './note/note.service';
import { NoteModule } from './note/note.module';
import { LinkModule } from './link/link.module';

@Module({
  imports: [ExtensionModule,
            TypeOrmModule.forRoot({
              type: 'mysql',
              host: 'localhost',
              port: 3306,
              username: 'root',
              password: 'root',
              database: 'test',
              entities: [],
              synchronize: true,
              autoLoadEntities: true,
            }),
            UserModule,
            PaperModule,
            FolderModule,
            NoteModule,
            LinkModule,
  ],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
