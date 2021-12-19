import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { siteRoutingModule } from './site-routing.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { siteComponent } from './site.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [siteComponent],
  imports: [
    CommonModule,
    siteRoutingModule,
    HomeModule,
    AboutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [siteComponent],
})
export class ClientModule {}
