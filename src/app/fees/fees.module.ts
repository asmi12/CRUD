import { FeeslistComponent } from './feeslist/feeslist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesComponent } from './fees.component';
import { FeesRoutes } from './fees.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FeesRoutes,ReactiveFormsModule
  ],
  declarations: [FeeslistComponent]
})
export class FeesModule { }
