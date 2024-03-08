import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Film } from '../../../models/film';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss'],
})
export class FilmSearchComponent implements OnInit {
  constructor(private filmService: DataService) {}

  ngOnInit(): void {
    this.filmService.getNowPlayingFilms();
  }

  search(searchText: string): void {
    searchText = searchText.toLocaleLowerCase();
    this.filmService.categoriesFilms = this.filmService.filmsList.filter(
      (film: Film) => {
        return film.title.toLowerCase().indexOf(searchText) > -1;
      }
    );
  }
}
