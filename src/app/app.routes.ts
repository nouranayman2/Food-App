import { Routes } from '@angular/router';
import path from 'path';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    { path: 'search/:searchItem', component: HomeComponent },
    { path: 'tag/:tag', component: HomeComponent },
    { path: 'food/:id', component: FoodpageComponent }
];
