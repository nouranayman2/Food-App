import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../services/cart.service';






@Component({
  selector: 'app-foodpage',
  standalone: true,
  imports: [CommonModule, RouterModule,TagsComponent,MatIconModule],
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoodpageComponent {
food! :Foods;
constructor( 
  private activatedRouter: ActivatedRoute,
  private foodService: FoodService,
  private cartService:CartService,
  private router: Router) {
  activatedRouter.params.subscribe((params)=>{
    if (params['id'])
      this.food = foodService.getFoodById(params ['id'])
  })
}
get foodTags(): string[] | undefined {
  return this.food.tags as string[] | undefined;
}
ngOnInit(): void {

}
addToCart() {
  this.cartService.addToCart(this.food);  
  this.router.navigate(['/cart-page']);
}

getStarType(starRating: number, index: number): string {
  if (index < Math.floor(starRating)) {
    return 'star'; 
  } else if (index < starRating) {
    return 'star_half'; 
  } else {
    return 'star_border'; 
  }
}

}