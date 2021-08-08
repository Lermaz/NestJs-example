/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { TaskStatus } from "../task-status.enum";

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  @ApiProperty({ enum: TaskStatus })
  status: TaskStatus;
}