import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'multiply/0', 
    pathMatch: 'full' 
  },
  {
    path: 'multiply/:multiplicationId',
    component: MultiplyComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
