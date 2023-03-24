import React from 'react';
import { Box, Card, CardBody, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import { useGetHomePlanetName } from '../../hooks';
import { type CharacterModel } from '../../interfaces';

interface ListItemProps {
  character: CharacterModel
}

export const ListItem = ({ character }: ListItemProps) => {
  const homeworld = useGetHomePlanetName(character.homeworld);

  return (
    <Box>
      <Card>
        <CardBody>
          <Heading size='md'>{character.name}</Heading>
          <SimpleGrid columns={2} spacing={10}>
            <Text>{character.gender}</Text>
            <Text align='right'>{homeworld}</Text>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Box>
  );
};
