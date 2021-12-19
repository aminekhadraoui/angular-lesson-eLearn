import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './client/about/about.component';
import { siteComponent } from './client/site.component';
import { HomeComponent } from './client/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  
  

  {
    path: 'site',
    component: siteComponent,
    children: [
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
