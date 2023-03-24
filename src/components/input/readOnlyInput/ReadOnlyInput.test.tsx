import React from 'react';
import { screen, render } from '@testing-library/react';
import { ReadOnlyInput } from './ReadOnlyInput';

const LABEL = 'test label';
const VALUE = 'test value';

const renderComponent = async ({ label = LABEL, value = VALUE, isLoading = false } = {}) => {
  const getLabel = (label: string | RegExp = LABEL) => screen.getByText(label);
  const getSkeleton = () => screen.getByRole('progressbar');
  const getValue = (value: string | RegExp = VALUE) => screen.getByDisplayValue(value);

  const utils = render(<ReadOnlyInput label={label} value={value} isLoading={isLoading} />);

  return {
    ...utils,
    getLabel,
    getSkeleton,
    getValue
  };
};

describe('ReadOnlyInput', () => {
  it('should render', async () => {
    const { getLabel } = await renderComponent();
    expect(getLabel()).toBeInTheDocument();
  });

  it('should render with loading state', async () => {
    const { getSkeleton } = await renderComponent({ isLoading: true });
    expect(getSkeleton()).toBeInTheDocument();
  });

  it('should render the value', async () => {
    const { getValue } = await renderComponent();
    expect(getValue()).toBeInTheDocument();
  });

  it('should render the input disabled', async () => {
    const { getValue } = await renderComponent();
    expect(getValue()).toBeDisabled();
  });
});
