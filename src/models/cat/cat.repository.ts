/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { GetCatFilterDto } from './dto/get-cat-filter.dto';
import { Cat } from './entities/cat.entity';

@EntityRepository(Cat)
export class CatsRepository extends Repository<Cat> {
  
  async findAll(filterDto: GetCatFilterDto): Promise<Cat[]> {
    const { name, owner } = filterDto;
    const query = this.createQueryBuilder('cat');

    if (name) {
      query.andWhere(
        '(LOWER(cat.name) LIKE LOWER(:name))',
        { name: `%${name}%` },
      );
    }

    if (owner) {
      query.andWhere(
        '(LOWER(cat.owner) LIKE LOWER(:owner))',
        { owner: `%${owner}%` },
      );
    }

    const cats = await query.getMany();
    return cats;
  }

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    const { name, owner, age } = createCatDto;

    const cat = this.create({
      name,
      owner,
      age,
    });

    await this.save(cat);
    return cat;
  }
}
