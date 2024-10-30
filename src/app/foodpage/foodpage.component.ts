import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';


@Component({
  selector: 'app-foodpage',
  standalone: true,
  imports: [CommonModule, RouterModule,TagsComponent],
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent {
food! :Foods;
constructor(private activatedRouter:ActivatedRoute, private foodService:FoodService
) {
  activatedRouter.params.subscribe((params)=>{
    if (params['id'])
      this.food = foodService.getFoodById(params ['id'])
  })
}

ngOnInit(): void {

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
