import React from 'react';
import { Alert, AlertIcon } from '@chakra-ui/react';
import { Layout } from '../Layout';

export const ErrorMessage = () => {
  return (
    <Layout>
      <Alert status='error' variant='left-accent' borderRadius={4}>
        <AlertIcon />
        There was an error processing your request.
      </Alert>
    </Layout>
  );
};
