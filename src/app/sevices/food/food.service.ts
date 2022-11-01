import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number) : Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Fastfood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'Slowfood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Cheesy', count: 1 },
      { name: 'Tasty', count: 1 }
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        star: 4,
        imageUrl: '/assets/food-1.jpg',
        tags: ['Fastfood', 'Pizza', 'Lunch']
      },
      {
        id: 2,
        name: 'Meatballs',
        cookTime: '15-20',
        price: 20,
        favorite: false,
        origins: ['Italy', 'Albania'],
        star: 3.8,
        imageUrl: '/assets/food-2.jpg',
        tags: ['Protein', 'Meat', 'Lunch']
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-15',
        price: 15,
        favorite: true,
        origins: ['United States'],
        star: 4.7,
        imageUrl: '/assets/food-3.jpg',
        tags: ['Fastfood', 'Burger', 'Breakfast']
      },
      {
        id: 4,
        name: 'French fries',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['France'],
        star: 4.0,
        imageUrl: '/assets/food-4.jpg',
        tags: ['Fastfood', 'Fries', 'Cheesy']
      },
      {
        id: 5,
        name: 'Soup',
        cookTime: '20-30',
        price: 20,
        favorite: false,
        origins: ['France', 'United States'],
        star: 3.5,
        imageUrl: '/assets/food-5.jpg',
        tags: ['Vegetables', 'Healthy', 'Lunch']
      },
      {
        id: 6,
        name: 'Pasta',
        cookTime: '20-30',
        price: 25,
        favorite: true,
        origins: ['Italy'],
        star: 4.8,
        imageUrl: '/assets/food-6.jpg',
        tags: ['Fastfood', 'Breakfast', 'Cheesy']
      },
      {
        id: 7,
        name: 'Burger-Fries Combo',
        cookTime: '30-40',
        price: 18,
        favorite: false,
        origins: ['Italy', 'France', 'Belgium'],
        star: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['Burger', 'Lunch', 'Fries']
      },
      {
        id: 8,
        name: 'Pizza Margherita',
        cookTime: '10-20',
        price: 15,
        favorite: true,
        origins: ['Italy', 'United States'],
        star: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['Cheesy', 'Fastfood', 'Lunch']
      },
    ];
  }
}


