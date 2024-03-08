import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  activeTab: string = 'nowPlaying';

  constructor(public filmService: DataService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  showFilms(filmType: string): void {
    this.activeTab = filmType;

    switch (filmType) {
      case 'nowPlaying':
        this.filmService.getNowPlayingFilms();
        break;

      case 'upComing':
        this.filmService.getUpcomingFilms();
        break;

      case 'topRated':
        this.filmService.getTopRatedFilms();
        break;

      case 'popular':
        this.filmService.getPopularFilms();
        break;

      default:
        console.log('Girilen Film Türü bulunamadı');
        break;
    }
  }
}
