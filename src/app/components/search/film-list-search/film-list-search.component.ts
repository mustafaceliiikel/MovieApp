import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-film-list-search',
  templateUrl: './film-list-search.component.html',
  styleUrls: ['./film-list-search.component.scss'],
})
export class FilmListSearchComponent implements OnInit {
  constructor(public filmService: DataService) {}

  ngOnInit(): void {}
}
