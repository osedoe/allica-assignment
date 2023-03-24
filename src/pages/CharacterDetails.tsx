import React from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, Card, CardBody, CardHeader, Heading, Skeleton, Stack } from '@chakra-ui/react';

import { type QueryError, type CharacterModel } from '../interfaces';
import { Layout, ReadOnlyInput, TagsInput, EditableInput } from '../components';
import { getCharacter } from '../api';
import { useGetFilms, useGetHomePlanetName } from '../hooks';

export const CharacterDetails = () => {
  const { pathname } = useLocation();
  const characterPosition = pathname.split('/')[2];
  const { data, isLoading, error } = useQuery<CharacterModel, QueryError>({ queryKey: ['character', characterPosition], queryFn: async () => await getCharacter(characterPosition) });

  const homeworldName = useGetHomePlanetName(data?.homeworld);

  const filmNames = useGetFilms(data?.films);

  return (
    <Layout error={error}>
      <Box>
        <Card>
          <CardHeader>
            <Skeleton height={14} isLoaded={!isLoading}>
              <Heading as='h2' size='xl' textAlign='center' my={4}>{data?.name}</Heading>
            </Skeleton>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <ReadOnlyInput label='Hair colour' value={data?.hair_color} isLoading={isLoading} />
              <ReadOnlyInput label='Eye colour' value={data?.eye_color} isLoading={isLoading} />
              <ReadOnlyInput label='Homeworld' value={homeworldName} isLoading={isLoading} />
              <EditableInput label='Gender' value={data?.gender} isLoading={isLoading} />
              <EditableInput label='Height' value={data?.height} isLoading={isLoading} />
              <TagsInput label='Films' values={filmNames} isLoading={isLoading} />
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Layout>
  );
};
