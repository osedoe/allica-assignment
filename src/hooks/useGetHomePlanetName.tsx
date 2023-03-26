import { useQuery } from '@tanstack/react-query';
import { type PlanetModel, type QueryError } from '../interfaces';

interface UseGetHomePlanetName {
  isLoading: boolean
  error: QueryError | null
  name?: string
}

export const useGetHomePlanetName = (url: string = ''): UseGetHomePlanetName => {
  const { data: planet, isLoading, error } = useQuery<PlanetModel, QueryError>({
    queryKey: [url],
    queryFn: async () => {
      return await fetch(url).then(async res => await res.json());
    }
  });

  return {
    name: planet?.name,
    isLoading,
    error
  };
};
