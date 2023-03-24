import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { ErrorMessage } from '../error';
import { type QueryError } from '../../interfaces';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode
  error?: QueryError | null
}

export const Layout = ({ children, error }: LayoutProps) => {
  if (error != null) {
    return <ErrorMessage />;
  }

  return (
    <Container maxW='800px' bg='#eee'>
      <Link to='/'>
        <Heading as='h1' size='2xl' textAlign='center' my={4} marginTop={20}>Star Wars Characters</Heading>
      </Link>
      <Box p={4} m={20} marginTop={10}>
        {children}
      </Box>
    </Container >
  );
};
