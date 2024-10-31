import { Component, Input, input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()  
  foodPagetags?: string[];  
  tags?: Tag[] = [];
  constructor(private fs:FoodService){}
  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags = this.fs.getAllTag();

  }

}
