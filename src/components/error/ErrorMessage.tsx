import React from 'react';
import { Alert, AlertIcon, Box, Container, Heading } from '@chakra-ui/react';

export const ErrorMessage = () => {
  return (
    <Container maxW='800px' bg='#eee'>
      <Heading as='h1' size='2xl' textAlign='center' my={4} marginTop={20}>Star Wars Characters</Heading>
      <Box p={4} m={20} marginTop={10}>
        <Alert status='error' variant='left-accent' borderRadius={4}>
          <AlertIcon />
          There was an error processing your request.
        </Alert>
      </Box>
    </Container >
  );
};
