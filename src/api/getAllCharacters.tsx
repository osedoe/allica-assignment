import { type CharacterModel } from '../interfaces';

export interface GetAllCharactersResponse {
  count: number
  next?: string
  previous?: string
  results: CharacterModel[]
}

export const getAllCharacters = async (): Promise<GetAllCharactersResponse> => {
  // Get all charactes from Swapi API
  const response = await fetch('https://swapi.dev/api/people/');
  const data = await response.json();
  return data;
};
