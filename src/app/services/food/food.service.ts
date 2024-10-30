import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }


  getAllFoodByTag(tag:string) :Foods[]{
    if(tag == 'All')
      return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return[
        { name: 'All', count: 17 },
        { name: 'Pasta', count: 1 },
        { name: 'Seafood', count: 2 },
        { name: 'Healthy', count: 4 },
        { name: 'Vegetarian', count: 6 },
        { name: 'Spicy', count: 1 },
        { name: 'Grill', count: 2 },
        { name: 'Noodles', count: 2 },
        { name: 'Fast Food', count: 7 },
        { name: 'Snack', count: 7 }
      ];
    
  }

  getAll():Foods[]{
    return[
     {
      id: 1,
        price: 10,
        name: "Spaghetti Bolognese",
        favorite: true,
        star: 4,
        tags: ["Italian", "Pasta", "Classic"],
        imageUrl: ["assets/s1.jpeg"],
        cookTime: "30 mins",
        origin: ["Italy"]
    },
    {
        id: 2,
        price: 15,
        name: "Sushi",
        favorite: false,
        star: 3,
        tags: ["Japanese", "Seafood"],
        imageUrl: ["assets/sushi.jpeg"],
        cookTime: "45 mins",
        origin: ["Japan"]
    },
    {
        id: 3,
        price: 8,
        name: "Caesar Salad",
        favorite: true,
        star: 3,
        tags: ["Salad", "Healthy", "Vegetarian"],
        imageUrl: ["assets/s2.jpeg"],
        cookTime: "15 mins",
        origin: ["US"]
    },
    {
        id: 4,
        price: 12,
        name: "Tacos",
        favorite: false,
        star: 1.7,
        tags: ["Mexican", "Spicy"],
        imageUrl: ["assets/taco.jpeg"],
        cookTime: "25 mins",
        origin: ["Mexico"]
    },
    {
        id: 5,
        price: 20,
        name: "Steak",
        favorite: true,
        star: 5,
        tags: ["American", "Grill"],
        imageUrl: ["assets/steak.jpeg"],
        cookTime: "50 mins",
        origin: ["United States"]
    },
    {
        id: 6,
        price: 9,
        name: "Noodles",
        favorite: false,
        star: 2,
        tags: ["Thai", "Noodles"],
        imageUrl: ["assets/padthai.jpeg"],
        cookTime: "30 mins",
        origin: ["Thailand"]
    },
    {
        id: 7,
        price: 10,
        name: "Koshary",
        favorite: true,
        star: 4.5,
        tags: ["Middle Eastern", "Vegetarian", "Noodles"],
        imageUrl: ["assets/koshary.jpeg"],
        cookTime: "20 mins",
        origin: ["Middle East"]
    },
    {
      id: 8,
      price: 5,
      name: "Fries",
      favorite: true,
      star: 4,
      tags: ["Fast Food", "Snack", "Vegetarian"],
      imageUrl: ["assets/fries1.jpeg"], 
      cookTime: "20 mins",
      origin: ["United States", "Belgium", "France"]
  },
  {
    id: 9,
    price: 7,
    name: "Veggie Burger",
    favorite: false,
    star: 1.2,
    tags: ["Fast Food", "Vegetarian", "Snack"],
    imageUrl: ["assets/vburger.jpeg"], 
    cookTime: "15 mins",
    origin: ["United States"]
},
{
  id: 10,
  price: 10,
  name: "Nachos",
  favorite: true,
  star: 4.0,
  tags: ["Fast Food", "Snack", "Vegetarian"],
  imageUrl: ["assets/nachos.jpeg"], 
  cookTime: "15 mins",
  origin: ["Mexico"]
},
{
  id: 11,
  price: 12,
  name: "Grilled Salmon",
  favorite: true,
  star: 4.8,
  tags: ["Healthy", "Grill"],
  imageUrl: ["assets/salmon.jpeg"], 
  cookTime: "30 mins",
  origin: ["Norway"]
},
{
  id: 17,
  price: 6,
  name: "Hot Dog",
  favorite: true,
  star: 4.3,
  tags: ["Fast Food", "Snack"],
  imageUrl: ["assets/hotdogs.jpeg"],  
  cookTime: "10 mins",
  origin: ["United States", "Germany"]  
}

    ]
  };
}
