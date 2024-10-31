import { Injectable } from '@angular/core';
import { Cart  } from '../shared/models/Cart'; 
import { CartItem } from '../shared/models/CartItem';
import { Foods } from '../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new  Cart();

  constructor() {}


addToCart(food: Foods): void {
  let cartItem = this.cart.items.find(item => item.food.id === food.id);
  if (cartItem) {
    this.changeQuantity(food.id, cartItem.quantity + 1);
    console.log('Quantity updated in CartService:', this.cart);
    return;
  }
  this.cart.items.push(new CartItem(food)); 
  console.log('Item added to cart in CartService:', this.cart);  
}

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }

  changeQuantity(foodId: number, quantity: number): void {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
