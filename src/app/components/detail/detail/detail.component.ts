import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../../models/film';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public filmId!: any;
  public film!: any;

  activeTab!: string;
  filmReviews!: any;

  constructor(public DataService: DataService, private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.filmId = params['id'];
    });
  }

  ngOnInit(): void {
    const films: Film[] = this.DataService.filmsList;
    this.film = films.find((film) => film.id == this.filmId);
    console.log('Bulunan Film : ' + this.film);

    this.getAboutMovie('about-movie');
    this.getFilmReviews();
  }

  getAboutMovie(filmType: string): void {
    this.activeTab = filmType;
    var content = document.querySelectorAll('#details-tabs-content > div');

    content.forEach(function (item) {
      item.classList.add('d-none');
    });

    // Seçili içeriğin "d-none" sınıfını kaldır
    var selectedContent = document.querySelector('.container .' + filmType);
    selectedContent?.classList.remove('d-none');
  }

  getReviews(filmType: string): void {
    this.activeTab = filmType;
    var content = document.querySelectorAll('#details-tabs-content > div');

    content.forEach(function (item) {
      item.classList.add('d-none');
    });

    // Seçili içeriğin "d-none" sınıfını kaldır
    var selectedContent = document.querySelector('.container .' + filmType);
    selectedContent?.classList.remove('d-none');
  }

  getCast(filmType: string): void {
    this.activeTab = filmType;
    var content = document.querySelectorAll('#details-tabs-content > div');

    content.forEach(function (item) {
      item.classList.add('d-none');
    });

    var selectedContent = document.querySelector('.container .' + filmType);
    selectedContent?.classList.remove('d-none');
  }

  getFilmReviews() {
    this.DataService.getFilmReviews(this.filmId);
  }

  // Watch List -----------------------------------

  addFilmToWatchList(film: Film) {
    this.DataService.addFilmToWatchList(film);
  }
}
