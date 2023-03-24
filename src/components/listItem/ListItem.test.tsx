import React from 'react';
import { screen, render } from '@testing-library/react';
import { type CharacterModel } from '../../interfaces';
import { ListItem } from './ListItem';
import * as UseGetHomePlanetNameModule from '../../hooks/useGetHomePlanetName';

const CHARACTER: Partial<CharacterModel> = {
  name: 'test name',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/'
};

const renderComponent = async () => {
  jest.spyOn(UseGetHomePlanetNameModule, 'useGetHomePlanetName').mockImplementation(() => 'Tatooine');

  const getHeading = (name = CHARACTER.name) => screen.getByText(name ?? 'test name');
  const getGender = (gender = CHARACTER.gender) => screen.getByText(gender ?? 'male');
  const getHomeworld = (homeworld = 'Tatooine') => screen.getByText(homeworld ?? 'Tatooine');

  const utils = render(<ListItem character={CHARACTER as CharacterModel} />);

  return {
    ...utils,
    getHeading,
    getGender,
    getHomeworld
  };
};

describe('ListItem', () => {
  it('should render', async () => {
    const { getHeading, getGender, getHomeworld } = await renderComponent();
    expect(getHeading()).toBeInTheDocument();
    expect(getGender()).toBeInTheDocument();
    expect(getHomeworld()).toBeInTheDocument();
  });
});
