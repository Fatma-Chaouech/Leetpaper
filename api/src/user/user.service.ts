import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {

    constructor( @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
    ) {}

    findOne(email: string): Promise<UserEntity> {
        return this.usersRepository.findOneBy({ email });
    }

    createUser(user: UserEntity): Promise<UserEntity> {
        return this.usersRepository.save(user);
    }
}
