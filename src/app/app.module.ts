import { BlankComponent } from './layout/blank/blank.component';
import { FullComponent } from './layout/full/full.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './core/navbar/navbar.component';
// import { FeesComponent } from './fees/fees.component';

const layout = [SidebarComponent,NavbarComponent, FullComponent, BlankComponent]
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      ...layout
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule
   ],
   exports: [
      ReactiveFormsModule,
      FormsModule,
      ...layout
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
