import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  dataService: any;

  constructor(public filmService: DataService) {}

  ngOnInit(): void {
    this.filmService.getTopTenFilms();
  }
}
