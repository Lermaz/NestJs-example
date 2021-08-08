import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CreateUserDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MinLength(4)
  @MaxLength(20)
  @Column({ unique: true })
  @ApiProperty()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  @Column()
  @ApiProperty()
  password: string;
}
