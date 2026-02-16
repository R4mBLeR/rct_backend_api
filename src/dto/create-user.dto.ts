import { IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Example email',
    required: true,
  })
  @IsString({ message: 'Email must be a string' })
  @MinLength(3, { message: 'Email must be minimal 3 chars' })
  @MaxLength(64, { message: 'Email must be maximum 64 chars' })
  email: string;

  @ApiProperty({
    example: 0,
    required: true,
  })
  @IsString({ message: 'Telegram id must be a string' })
  id: string;
}
