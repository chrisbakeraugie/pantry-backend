import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pantry, PantryDocument } from './schemas/pantry.schema';

@Injectable()
export class PantryService {
  constructor(
    @InjectModel(Pantry.name) private pantryModel: Model<PantryDocument>,
  ) {}

  async create(name: string): Promise<Pantry> {
    return this.pantryModel.create({ name });
  }

  async findAll(): Promise<Pantry[]> {
    return this.pantryModel.find().exec();
  }
}
