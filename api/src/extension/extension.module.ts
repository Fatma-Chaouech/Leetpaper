import { Module } from '@nestjs/common';
import { ExtensionController } from './extension.controller';
import { ExtensionService } from './extension.service';

@Module({
    imports: [],
    controllers: [ExtensionController],
    providers: [ExtensionService],
})
export class ExtensionModule {

}
