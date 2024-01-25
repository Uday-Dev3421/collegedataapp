import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SheetComponent } from './sheet/sheet.component';
import { StudentFilterComponent } from './student-filter/student-filter.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"studentlist",component: StudentFilterComponent},
  {path:"upload",component:SheetComponent},
  {path:"", redirectTo:'/home', pathMatch:'full' },
  {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
