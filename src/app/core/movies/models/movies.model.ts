export interface MoviesRequest {
  page: number,
  search: string
}

export interface MoviesResponse {
  count: number
  next: string
  previous: any
  results: MovieList[]
}

export interface MovieList {
  title: string
  description: string
  genres: string
  uuid: string
  isPreview: boolean
}
