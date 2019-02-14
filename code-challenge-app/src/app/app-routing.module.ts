import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component'
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'chart', component: ChartComponent },
  // { path: 'products', component: ProductsComponent },
  // { path: 'product/:id', component: ProductComponent },
  // { path: '**', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
