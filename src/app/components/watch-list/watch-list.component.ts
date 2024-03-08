import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
})
export class WatchListComponent implements OnInit {
  filmList!: Film[];

  constructor(public DataService: DataService) {}

  ngOnInit(): void {
    this.filmList = this.DataService.watchList;
  }

  deleteFilmFromWatchList(film: Film) {
    this.DataService.deleteFilmToWatchList(film);
  }
}
