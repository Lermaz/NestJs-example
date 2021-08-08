import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { GetCatFilterDto } from './dto/get-cat-filter.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Controller('cat')
@ApiTags('cat')
@ApiBearerAuth('Bearer')
@UseGuards(AuthGuard())
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catService.create(createCatDto);
  }

  @Get()
  findAll(@Query() filterDto: GetCatFilterDto): Promise<Cat[]> {
    return this.catService.findAll(filterDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catService.update(id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catService.remove(id);
  }
}
