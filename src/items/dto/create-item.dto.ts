import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { ItemGroup } from '../interfaces/item.interface'

export class CreateItemDto {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly brandTitle: string;

  @ApiProperty()
  readonly brandLogo: string;

  @ApiProperty()
  @IsEnum(ItemGroup)
  readonly group: ItemGroup;

  @ApiProperty()
  readonly itemImage: string;

  @ApiProperty()
  readonly desc: string;

  @ApiProperty()
  readonly inventory: number;

  @ApiProperty()
  readonly price: number;
}