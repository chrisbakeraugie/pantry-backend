import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePantryDto {
  @ApiProperty({
    example: 'Test Panty Name',
    description: 'The name of the pantry',
  })
  @IsString()
  name!: string;
}
