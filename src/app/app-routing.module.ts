import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component'
import { EditComponent } from './edit/edit.component'
import { ReateComponent } from './reate/reate.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  { path: 'home', component: HomeComponent },
  { path: 'create', component: ReateComponent },
  { path: 'products', component: ListComponent },
  { path: 'products/edit/:id', component: EditComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }