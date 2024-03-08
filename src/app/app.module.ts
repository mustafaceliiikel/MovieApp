import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { CategoryComponent } from './components/home/category/category.component';
import { NgxSplideModule } from 'ngx-splide';
import { TabsComponent } from './components/home/tabs/tabs.component';
import { FilmListComponent } from './components/home/film-list/film-list.component';
import { FilmSearchComponent } from './components/search/film-search/film-search.component';
import { FilmListSearchComponent } from './components/search/film-list-search/film-list-search.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    SearchComponent,
    SliderComponent,
    CategoryComponent,
    TabsComponent,
    FilmListComponent,
    FilmSearchComponent,
    NavbarComponent,
    FilmListSearchComponent,
    WatchListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxSplideModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
