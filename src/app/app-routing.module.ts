import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
