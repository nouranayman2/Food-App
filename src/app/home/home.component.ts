import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Foods } from '../shared/models/food';
import { MatIconModule } from '@angular/material/icon';
import { RatingWrapperModule } from '../rating-wrapper/rating-wrapper.module';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatIconModule,SearchComponent,TagsComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent {
  foods: Foods[] = [];

  constructor(private fs:FoodService, private router:ActivatedRoute){}

  ngOnInit(): void {
    this.foods = this.fs.getAll();
    this.router.params.subscribe(params =>{
    if(params['searchItem'])
      this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
    else if(params['tag'])
      this.foods=this.fs.getAllFoodByTag(params['tag'])
    else
    this.foods = this.fs.getAll();
  })

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



