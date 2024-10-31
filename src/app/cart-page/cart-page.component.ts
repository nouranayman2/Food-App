import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
cart! :Cart;

constructor(private cartService: CartService) {
  
}

ngOnInit(): void {
  this.setCart();
  console.log("Cart data on CartPageComponent load:", this.cart);
}

setCart() {
  this.cart = this.cartService.getCart();
  console.log("Cart contents on page load:", this.cart); 

}


removeFromCart(cartItem: CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();

}
changeQuantity(cartItem: CartItem, quantityInString: string) {
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id, quantity);
  this.setCart();
}
}
