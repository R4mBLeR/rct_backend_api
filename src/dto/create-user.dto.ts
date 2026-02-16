import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Example email',
    required: true,
  })
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Email address must be a valid email address' })
  email: string;

  @ApiProperty({
    example: '100',
    required: false,
    type: String,
  })
  @IsString({ message: 'Telegram id must be a string' })
  id: string | null;
}
