import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { PaperEntity } from './entities/paper.entity';

@Injectable()
export class PaperService {

    constructor( @InjectRepository(PaperEntity)
    private papersRepository: Repository<PaperEntity>
    ) {}

    findOne(id: number): Promise<PaperEntity> {
        return this.papersRepository.findOne({where: {
            paperId: id
        }});
    }

    findAll(): Promise<PaperEntity[]> {
        return this.papersRepository.find();
    }

    addPaper(url: string, content: string): Promise<PaperEntity> {
        const paper = new PaperEntity();
        paper.url = url;
        paper.content = content;
        return this.papersRepository.save(paper);
    }

    async deletePaper(url: string): Promise<PaperEntity> {
        const result = await this.papersRepository.delete(url);
        return result.raw;
    }
}
