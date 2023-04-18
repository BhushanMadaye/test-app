import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { PageEvent } from '@angular/material/paginator';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/services';
import { MovieList, MoviesRequest, MoviesResponse } from 'src/app/core/movies/models';
import { MoviesService } from 'src/app/core/movies/services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, AfterViewInit {

  movies: MovieList[] = [];
  moviesMaster: MovieList[] = [];
  filters: Partial<MoviesRequest> = {
    page: 1
  };
  totalCount: number = 0;
  apiFailed: boolean = false;
  isDarkThemeEnabled: boolean = true;
  @ViewChild('searchElement') searchElement!: ElementRef;

  constructor(
    private moviesService: MoviesService,
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    fromEvent(this.searchElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(250),
        distinctUntilChanged(),
        filter((term: any) => {
          return (term.target.value as string).length > 3 || (term.target.value as string).length === 0
        }),
      )
      .subscribe((res: any) => {
        console.log(res.target.value);
        const searchTerm = res.target.value;
        if (!searchTerm) {
          this.movies = [...this.moviesMaster];
        } else {
          this.movies = this.moviesService.filterMovies(this.moviesMaster, searchTerm);
        }
      });
  }

  ngOnInit(): void {
    this.getMovies();
    const hostClass = localStorage.getItem('theme') ?? 'theme-light';
    this.isDarkThemeEnabled = hostClass === 'theme-dark' ? true : false;
  }

  getMovies() {
    this.apiFailed = false;

    this.moviesService.getMovies(this.filters)
    .pipe(
      map((res: MoviesResponse) => {
        this.movies = res.results;
        this.moviesMaster = [...this.movies];
        this.totalCount = res.count;
      }),
      catchError((err) => {
        this.apiFailed = true;
        throw err;
      })
    )
    .subscribe();
  }

  pageChange(event: PageEvent) {
    this.filters = {
      page: event.pageIndex + 1
    }
    this.getMovies();
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  switchTheme(event: MatSlideToggleChange) {
    const hostClass = event.checked ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
    localStorage.setItem('theme', hostClass);
  }
}
