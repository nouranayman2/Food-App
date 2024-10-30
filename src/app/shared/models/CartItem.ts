import { Foods } from "./food";

export class CartItem{
    [x: string]: any;
    constructor(food:Foods){
        this.food = food;
      
    }
    food:Foods;
    quantity:number = 1;
    get price(): Number{
        return this.food.price * this.quantity
    }

}