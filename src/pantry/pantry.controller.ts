import { Body, Controller, Get, Post } from '@nestjs/common';
import { PantryService } from './pantry.service';
import { CreatePantryDto } from './dto/create-pantry.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pantry')
@Controller('pantry')
export class PantryController {
  constructor(private readonly pantryService: PantryService) {}

  @Post()
  create(@Body() dto: CreatePantryDto) {
    return this.pantryService.create(dto.name);
  }

  @Get()
  findAll() {
    return this.pantryService.findAll();
  }
}
