import React from 'react';
import { Skeleton, Badge, VStack, Heading, Box, Center } from '@chakra-ui/react';

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
            {values.map(value => <Badge key={value} colorScheme='purple'>{value}</Badge>)}
          </VStack>
        </Center>
      </Box>
    </Skeleton>
  );
};
