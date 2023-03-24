import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxW='800px' bg='#eee'>
      <Heading as='h1' size='2xl' textAlign='center' my={4} marginTop={20}>Star Wars Characters</Heading>
      <Box p={4} m={20} marginTop={10}>
        {children}
      </Box>
    </Container >
  );
};
