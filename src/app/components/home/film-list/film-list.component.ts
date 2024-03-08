import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
})
export class FilmListComponent implements OnInit {
  constructor(public filmService: DataService) {}

  ngOnInit(): void {
    this.filmService.getNowPlayingFilms();
  }
}
