import { Component, Input, OnInit } from '@angular/core';
import { MovieList } from 'src/app/core/movies/models';
import { ViewMovieDialogComponent } from '../view-movie-dialog/view-movie-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: MovieList;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openCard(movie: MovieList) {
    if (movie.isPreview) return;

    this.dialog.open(ViewMovieDialogComponent, {
      data: {
        ...movie,
        isPreview: true
      },
      width: '500px'
    });
  }

}
