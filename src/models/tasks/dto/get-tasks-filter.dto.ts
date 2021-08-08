/* eslint-disable prettier/prettier */
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  @ApiPropertyOptional()
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  search?: string;
}
