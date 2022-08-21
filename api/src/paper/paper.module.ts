import { Module } from '@nestjs/common';
import { PaperService } from './paper.service';
import { PaperController } from './paper.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaperEntity } from './entities/paper.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaperEntity])],
  providers: [PaperService],
  controllers: [PaperController],
  exports: [PaperService]
})
export class PaperModule {}
