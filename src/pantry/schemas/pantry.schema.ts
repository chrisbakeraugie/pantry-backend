import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PantryDocument = Pantry & Document;

@Schema()
export class Pantry {
  @Prop({ required: true })
  name!: string;
}

export const PantrySchema = SchemaFactory.createForClass(Pantry);
