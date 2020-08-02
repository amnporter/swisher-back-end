import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe, HttpException, HttpStatus, Query } from '@nestjs/common';
import { ApiTags, ApiParam, ApiQuery } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';

@ApiTags('items')
@Controller('items')
export class ItemsController {

  constructor(private itemsService: ItemsService) { }

  @ApiQuery({ name: 'replenish', required: false })
  @Get()
  getItems(@Query('replenish') replenish: string): Promise<Item[]> {
    if (replenish === undefined) {
      return this.itemsService.getItems();
    } else {
      return this.itemsService.replenishData();
    }

  }

  @ApiParam({ name: 'id' })
  @Get(':id')
  getItem(@Param('id', ParseIntPipe) id: number): Promise<Item> {
    return this.itemsService.getItem(id);
  }

  @Post()
  async createItem(@Body() createItemDto: CreateItemDto): Promise<CreateItemDto> {
    try {
      return await this.itemsService.createItem(createItemDto);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  @ApiParam({ name: 'id' })
  @Put(':id')
  updateItem(@Param('id', ParseIntPipe) id: number, @Body() updateItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.updateItem(id, updateItemDto);
  }

  @ApiParam({ name: 'id' })
  @Delete(':id')
  deleteItem(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.itemsService.deleteItem(id);
  }

}


