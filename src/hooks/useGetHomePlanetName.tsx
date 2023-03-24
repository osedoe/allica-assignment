import { useQuery } from '@tanstack/react-query';
import { type PlanetModel, type QueryError } from '../interfaces';

export const useGetHomePlanetName = (url: string = ''): string => {
  const { data: planet, isLoading, error } = useQuery<PlanetModel, QueryError>({ queryKey: [url], queryFn: async () => await fetch(url).then(async (res) => await res.json()) });

  if (isLoading || (error != null)) {
    return '';
  }

  return planet?.name;
};
