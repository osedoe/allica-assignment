import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { VStack } from '@chakra-ui/react';

import { getAllCharacters, type GetAllCharactersResponse } from '../api';
import { Layout, ListItem, ListSkeleton } from '../components';
import { type CharacterModel, type QueryError } from '../interfaces';
import { ErrorMessage } from '../components/error';

export const Home = () => {
  const { data: charactersList, isLoading, error } = useQuery<GetAllCharactersResponse, QueryError>({ queryKey: ['characters'], queryFn: getAllCharacters });

  if (isLoading) {
    return <ListSkeleton />;
  }

  if (error != null) {
    return <ErrorMessage />;
  }

  return (
    <Layout>
      <VStack align='stretch'>
        {charactersList?.results.map((character: CharacterModel) => <ListItem key={character.name} character={character} />)}
      </VStack>
    </Layout>
  );
};
