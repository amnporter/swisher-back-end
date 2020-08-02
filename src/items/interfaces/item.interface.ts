import { Document } from 'mongoose';

export enum ItemGroup {
  CIGARS_CIGARELLOS = 'Cigars & Cigarellos',
  SMOKELESS = 'Smokeless',
  FILTERED_CIGARS = 'Filtered Cigars'
}

export interface Item extends Document{
  id: number;
  brandTitle: string;
  brandLogo: string;
  group: ItemGroup;
  itemImage: string;
  desc: string;
  inventory: number;
  price: number;
}

