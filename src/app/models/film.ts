export interface Film {
  id: number;
  vote_average: number;
  title: string;
  backdrop_path: string;
  overview: string;
  poster_path: string;
  filmReviews: {
    author: string;
    content: string;
  };
}
