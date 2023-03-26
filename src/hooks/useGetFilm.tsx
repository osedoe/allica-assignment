import { useQueries } from '@tanstack/react-query';
import { type FilmModel } from '../interfaces';

const queryFetch = (url: string) => async () => await fetch(url).then(async (res) => await res.json());

interface QueryObject {
  queryKey: string[]
  queryFn: () => Promise<FilmModel>
}

const toQueryObject = (url: string): QueryObject => {
  const queryKey = url.slice(url.indexOf('film'), -1);
  return {
    queryKey: [queryKey],
    queryFn: queryFetch(url)
  };
};

interface UseGetFilms {
  isLoading: boolean
  error: boolean
  names?: string[]
}

export const useGetFilms = (urls: string[] = []): UseGetFilms => {
  const queries = urls.map(toQueryObject);

  const filmsResponse = useQueries({ queries });
  const isLoading = filmsResponse.some((film) => film.isLoading);
  const error = filmsResponse.some((film) => film.error);

  const filmsData = filmsResponse.map((film) => (film.data as unknown as FilmModel));
  const filmNames = filmsData.map((film) => film?.title);

  return {
    names: filmNames,
    isLoading,
    error
  };
};
