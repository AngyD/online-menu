export interface MenuItem {
  name: string;
  price: number;
  ingredients: string[];
  allergens: string[];
}

export interface Menu {
  category: string;
  items: MenuItem[];
}
