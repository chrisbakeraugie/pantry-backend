import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PantryService } from './pantry.service';
import { PantryController } from './pantry.controller';
import { Pantry, PantrySchema } from './schemas/pantry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pantry.name, schema: PantrySchema }]),
  ],
  providers: [PantryService],
  controllers: [PantryController],
})
export class PantryModule {}
