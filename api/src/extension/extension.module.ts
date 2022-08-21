import { Module } from '@nestjs/common';
import { PaperModule } from 'src/paper/paper.module';
import { ExtensionController } from './extension.controller';
import { ExtensionService } from './extension.service';

@Module({
    imports: [PaperModule],
    controllers: [ExtensionController],
    providers: [ExtensionService],
})
export class ExtensionModule {

}
