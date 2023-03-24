import React from 'react';
import { CheckIcon, EditIcon } from '@chakra-ui/icons';
import { Skeleton, InputGroup, InputLeftAddon, Input, InputRightElement, IconButton } from '@chakra-ui/react';
import { log } from 'console';

interface EditableInputProps {
  label: string
  value?: string
  isLoading?: boolean
}

export const EditableInput = ({ label, value, isLoading = false }: EditableInputProps) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(value);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const ariaLabel = isEditing ? 'save' : 'edit';
  const inputIcon = isEditing ? <CheckIcon /> : <EditIcon />;
  return (
    <Skeleton role="progressbar" aria-label="button-skeleton" isLoaded={!isLoading}>
      <InputGroup>
        <InputLeftAddon width='7rem' children={label} />
        <Input value={inputValue} isDisabled={!isEditing} onBlur={handleInputChange} />
        <InputRightElement children={<IconButton aria-label={ariaLabel} icon={inputIcon} onClick={handleEdit} />} />
      </InputGroup>
    </Skeleton>
  );
};
