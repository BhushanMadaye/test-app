import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { RouterModule, Routes } from '@angular/router';
/** Material Modules */
import { MaterialModule } from 'src/app/core/material/material.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ViewMovieDialogComponent } from './view-movie-dialog/view-movie-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  }
];


@NgModule({
  declarations: [
    MoviesComponent,
    MovieCardComponent,
    ViewMovieDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class MoviesModule { }
