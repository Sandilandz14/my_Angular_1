import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './componets/landing-page/landing-page.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';

const routes: Routes = [
 {path: '', component:AppComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
