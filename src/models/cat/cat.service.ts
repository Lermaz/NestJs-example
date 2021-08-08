import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatsRepository } from './cat.repository';
import { CreateCatDto } from './dto/create-cat.dto';
import { GetCatFilterDto } from './dto/get-cat-filter.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  constructor(
    @InjectRepository(CatsRepository)
    private catsRepository: CatsRepository,
  ) {}

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsRepository.createCat(createCatDto);
  }

  findAll(filterDto: GetCatFilterDto): Promise<Cat[]> {
    return this.catsRepository.findAll(filterDto);
  }

  async findOne(id: string): Promise<Cat> {
    const found = await this.catsRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Cat with ID ${id} not found`);
    }

    return found;
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<string> {
    await this.catsRepository.update(id, updateCatDto);

    return `The cat ${updateCatDto.name} has updated`;
  }

  async remove(id: string): Promise<string> {
    await this.catsRepository.delete(id);

    return `The cat has eliminate`;
  }
}
