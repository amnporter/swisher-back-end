

/* import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
  id: Number,
  title: String,
  author: String
}); */
 
import { Schema , Prop, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsEnum } from 'class-validator';
import { ItemGroup } from '../interfaces/item.interface';

@Schema()
export class Item extends Document {
  @Prop({required: true, unique: true})
  id: number;

  @Prop({required: true})
  brandTitle: string;

  @Prop({required: true})
  brandLogo: string;
  
  @IsEnum(ItemGroup)
  @Prop({ required: true })
  group: ItemGroup;

  @Prop({required: true})
  itemImage: string;

  @Prop({required: true})
  desc: string;

  @Prop({required: true})
  inventory: number;

  @Prop({required: true})
  price: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);