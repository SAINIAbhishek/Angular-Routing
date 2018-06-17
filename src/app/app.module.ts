import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SettingLoadingComponent } from './setting-loading/setting-loading.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigatingComponent } from './navigating/navigating.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'registering', component: SettingLoadingComponent},
  { path: 'navigation', component: NavigatingComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SettingLoadingComponent,
    HomeComponent,
    NavigatingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
