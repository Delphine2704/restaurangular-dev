import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReserveComponent } from './reserve/reserve.component';
import { ContactComponent } from './contact/contact.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { DishTableComponent } from './dish-table/dish-table.component';
import {
  MatToolbarModule,
  MatButtonModule,
  MatDividerModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatGridListModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatSelectModule
} from "@angular/material";

import { QuickLunchService } from './services/quick-lunch.service';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReserveComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatSelectModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    QuickLunchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
