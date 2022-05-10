import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from './entities/user.entity'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ) {}

    async getAll(): Promise<User[]> {
        return await this.usersRepository.find();  // SELECT * FROM user
    }

    async getUserById(id: number): Promise<User> {
        try {
            const user = await this.usersRepository.findOneOrFail({where: {id}}); // SELECT * FROM user WHERE user.id = id 
            return user;
        } catch (err) {
            // handle error
            throw err;
        } 
    }

    async createUser(name: string): Promise<User> {
        const newUser = this.usersRepository.create({name}); // const user = new User()
        return await this.usersRepository.save(newUser); // insert new  user
    }
 
    async updateUser(id: number, name: string): Promise<User> {
        const user = await this.getUserById(id)
        user.name = name
        return this.usersRepository.save(user) // update
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.getUserById(id)
        return this.usersRepository.remove(user)
    }

    customQuery(): any {
        return this.usersRepository.createQueryBuilder('user').select('name');
    }

}
