import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieList } from 'src/app/core/movies/models';

@Component({
  selector: 'app-view-movie-dialog',
  templateUrl: './view-movie-dialog.component.html',
  styleUrls: ['./view-movie-dialog.component.scss']
})
export class ViewMovieDialogComponent implements OnInit {

  movie!: MovieList;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.movie = this.data;
  }

}
