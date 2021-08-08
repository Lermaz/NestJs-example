import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsRepository } from './cat.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([CatsRepository]), AuthModule],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
