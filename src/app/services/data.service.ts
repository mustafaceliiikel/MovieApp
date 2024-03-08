import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film';
import { FilmResponse } from '../models/film-response';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  apiKey: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzdhNThhOTk4OTU5NWYxNTQxNDBmMmIwZDZjNDg4NyIsInN1YiI6IjY1ZDVkMTdjYzhhNWFjMDE3YmUxZDUyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9tWvGEgaa49WKxKrpOH5cQtvGXy5pmoUN6Xs9s5VBxk';
  filmsList!: Film[];
  popularFilms!: Film[];
  categoriesFilms!: Film[];

  public watchList: any[] = [];

  // Tabs
  getNowPlayingFilms(): void {
    this.http
      .get<FilmResponse>(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        {
          headers: {
            Authorization: 'Bearer ' + this.apiKey,
          },
        }
      )
      .subscribe((filmResponse: FilmResponse) => {
        this.filmsList = filmResponse.results;
        this.categoriesFilms = filmResponse.results;
      });
  }

  getUpcomingFilms(): void {
    this.http
      .get<FilmResponse>(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        {
          headers: {
            Authorization: 'Bearer ' + this.apiKey,
          },
        }
      )
      .subscribe((filmResponse: FilmResponse) => {
        this.filmsList = filmResponse.results;
      });
  }

  getTopRatedFilms(): void {
    this.http
      .get<FilmResponse>(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        {
          headers: {
            Authorization: 'Bearer ' + this.apiKey,
          },
        }
      )
      .subscribe((filmResponse: FilmResponse) => {
        this.filmsList = filmResponse.results;
      });
  }

  getPopularFilms(): void {
    this.http
      .get<FilmResponse>(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
          headers: {
            Authorization: 'Bearer ' + this.apiKey,
          },
        }
      )
      .subscribe((filmResponse: FilmResponse) => {
        this.filmsList = filmResponse.results;
      });
  }

  getFilmReviews(filmId: number): void {
    this.http
      .get<FilmResponse>(
        `https://api.themoviedb.org/3/movie/${filmId}/reviews?language=en-US&page=1`,
        {
          headers: {
            Authorization: 'Bearer ' + this.apiKey,
          },
        }
      )
      .subscribe((filmResponse: FilmResponse) => {
        const foundFilm = this.filmsList.find((film) => film.id === 1);

        if (foundFilm) {
          alert(foundFilm);
        } else {
          alert('Film not found');
        }
      });
  }

  // Slider Component
  getTopTenFilms(): void {
    this.http
      .get<FilmResponse>(
        'https://api.themoviedb.org/3/trending/movie/day?api_key',
        {
          headers: {
            Authorization: 'Bearer ' + this.apiKey,
          },
        }
      )
      .subscribe((filmResponse: FilmResponse) => {
        this.popularFilms = filmResponse.results.slice(0, 10);
      });
  }

  // Watch List Component
  addFilmToWatchList(film: Film) {
    this.watchList.push(film);
  }

  deleteFilmToWatchList(film: Film) {
    const index = this.watchList.findIndex((item) => item === film);
    if (index !== -1) {
      this.watchList.splice(index, 1);
    } else {
      alert(`"${film}" filmi bulunamadı.`);
    }
  }
}
