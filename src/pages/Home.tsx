import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { getAllCharacters, type GetAllCharactersResponse } from '../api';
import { Layout, ListItem, ListSkeleton } from '../components';
import { type CharacterModel, type QueryError } from '../interfaces';

export const Home = () => {
  const { data: charactersList, isLoading, error } = useQuery<GetAllCharactersResponse, QueryError>({ queryKey: ['characters'], queryFn: getAllCharacters });

  if (isLoading) {
    return <ListSkeleton />;
  }

  return (
    <Layout error={error}>
      <VStack align='stretch'>
        {charactersList?.results.map((character: CharacterModel, index: number) => {
          const characterPosition = index + 1;
          const route = `character-details/${characterPosition}`;
          const id = uuid();
          return (
            <Link key={id} to={route}>
              <ListItem character={character} />
            </Link>);
        })}
      </VStack>
    </Layout>
  );
};
