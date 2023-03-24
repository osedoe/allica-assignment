import React from 'react';
import { screen, render } from '@testing-library/react';
import { TagsInput } from './TagsInput';

const LABEL = 'test label';
const VALUES = ['test value 1', 'test value 2'];

const renderComponent = async ({ label = LABEL, values = VALUES, isLoading = false } = {}) => {
  const getLabel = (label: string = LABEL) => screen.getByText(label);
  const getSkeleton = () => screen.getByRole('progressbar');
  const getValue = (value: string = VALUES[0]) => screen.getByText(value);

  const utils = render(<TagsInput label={label} values={values} isLoading={isLoading} />);

  return {
    ...utils,
    getLabel,
    getSkeleton,
    getValue
  };
};

describe('TagsInput', () => {
  it('should render', async () => {
    const { getLabel } = await renderComponent();
    expect(getLabel()).toBeInTheDocument();
  });

  it('should render with loading state', async () => {
    const { getSkeleton } = await renderComponent({ isLoading: true });
    expect(getSkeleton()).toBeInTheDocument();
  });

  it('should render the tags', async () => {
    const { getValue } = await renderComponent();

    expect(getValue(VALUES[0])).toBeInTheDocument();
    expect(getValue(VALUES[1])).toBeInTheDocument();
  });
});
