import React from 'react';
import { Box, Card, CardBody, Heading, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useGetHomePlanetName } from '../../hooks';
import { type CharacterModel } from '../../interfaces';

interface ListItemProps {
  character: CharacterModel
}

export const ListItem = ({ character }: ListItemProps) => {
  const { name: homeworldName, isLoading } = useGetHomePlanetName(character.homeworld);

  return (
    <Skeleton isLoaded={!isLoading}>
      <Box>
        <Card>
          <CardBody>
            <Heading size='md'>{character.name}</Heading>
            <SimpleGrid columns={2} spacing={10}>
              <Text>{character.gender}</Text>
              <Text align='right'>{homeworldName}</Text>
            </SimpleGrid>
          </CardBody>
        </Card>
      </Box>
    </Skeleton>
  );
};
