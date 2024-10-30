import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem: string = '';

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchItem'])
      this.searchItem = params['searchItem'];
    })
  }
  search(): void{
    console.log(`Navigating to /search/${this.searchItem}`);  
      this.router.navigateByUrl('/search/' + this.searchItem);
    }
  }
