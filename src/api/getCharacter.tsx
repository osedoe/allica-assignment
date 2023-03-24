import { type CharacterModel } from '../interfaces';

export const getCharacter = async (position: string): Promise<CharacterModel> => {
  const response = await fetch(`https://swapi.dev/api/people/${position}`);
  const data = await response.json();
  return data;
};
