import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError } from 'rxjs';
import { MovieList, MoviesRequest, MoviesResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getMovies(params: Partial<MoviesRequest>):Observable<any> {
    const GET_MOVIES = ` https://demo.credy.in/api/v1/maya/movies/`;
    return this.http.get(GET_MOVIES, { params })
    .pipe(
      catchError(err => {
        console.log(err.error.error.message);
        this.toastr.error(err.error.error.message);
        throw err;
      })
    );
  }

  filterMovies(movies: MovieList[], searchTerm: string): MovieList[] {
    return movies.filter(e => {
      return e.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
  }
}
