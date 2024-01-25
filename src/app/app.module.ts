import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFilterComponent } from './student-filter/student-filter.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ClgNavComponent } from './clg-nav/clg-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SheetComponent } from './sheet/sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFilterComponent,
    StudentlistComponent,
    AppNavComponent,
    HomeComponent,
    ClgNavComponent,
    PageNotFoundComponent,
    SheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
