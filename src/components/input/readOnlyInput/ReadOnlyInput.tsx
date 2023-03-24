import React from 'react';
import { Skeleton, InputGroup, InputLeftAddon, Input } from '@chakra-ui/react';

interface ReadOnlyInputProps {
  label: string
  value?: string
  isLoading?: boolean
}

export const ReadOnlyInput = ({ label, value = '', isLoading = false }: ReadOnlyInputProps) => {
  return (
    <Skeleton role="progressbar" aria-label="button-skeleton" isLoaded={!isLoading}>
      <InputGroup>
        <InputLeftAddon width='7rem' children={label} />
        <Input value={value} isDisabled={true} />
      </InputGroup>
    </Skeleton>
  );
};
