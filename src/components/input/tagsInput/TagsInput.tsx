import React from 'react';
import { Skeleton, Badge, VStack, Heading, Box, Center } from '@chakra-ui/react';
import { v4 as uuid } from 'uuid';

interface TagsInputProps {
  label: string
  values?: string[]
  isLoading?: boolean
}

export const TagsInput = ({ label, values = [], isLoading = false }: TagsInputProps) => {
  return (
    <Skeleton role="progressbar" aria-label="button-skeleton" isLoaded={!isLoading}>
      <Box>
        <Center>
          <VStack width="20rem">
            <Heading as='h3' size='md' textAlign='center' my={4}>{label}</Heading>
            {values.map(value => {
              const id = uuid();
              return <Badge key={id} colorScheme='purple'>{value}</Badge>;
            })}
          </VStack>
        </Center>
      </Box>
    </Skeleton>
  );
};
