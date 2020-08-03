import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { data } from '../fake-data/fade-data';

@Injectable()
export class ItemsService {

  constructor(
    @InjectModel('Item') private readonly itemModel: Model<Item>) {

    this.replenishData();
  }

  async getItems(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async getItem(id: number): Promise<Item> {
    const item = await this.itemModel.findOne({ id: id }).exec();
    if (item) {
      return item
    } else {
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    }
  }

  async replenishData(): Promise<Item[]> {
    return new Promise((resolve, reject) => {
      this.itemModel.deleteMany({}, err => {
        if (err) Logger.error(err);

        resolve(this.itemModel.insertMany(data as Item[]));
      })
    })
  }

  async createItem(item: CreateItemDto): Promise<Item> {
    const newItem = new this.itemModel(item);
    return newItem.save();
  }

  async updateItem(id: number, updateItemDto: CreateItemDto): Promise<Item> {
    return this.itemModel.findOneAndUpdate({ id: id }, updateItemDto, { new: true });
  }

  async deleteItem(id: number): Promise<Item> {
    return this.itemModel.findOneAndRemove({ id: id });
  }
}
