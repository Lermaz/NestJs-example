/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CatModule } from './cat/cat.module';
import { TasksModule } from './tasks/tasks.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TasksModule, AuthModule, CatModule, UserModule],
})
export class ModelsModule {}
