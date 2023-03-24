import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import { EditableInput } from './EditableInput';
import userEvent from '@testing-library/user-event';

const LABEL = 'test label';
const VALUE = 'test value';

const renderComponent = async ({ label = LABEL, value = VALUE, isLoading = false } = {}) => {
  const getLabel = (label: string | RegExp = LABEL) => screen.getByText(label);
  const getSkeleton = () => screen.getByRole('progressbar');
  const getEditIcon = () => screen.getByLabelText('edit');
  const getCheckIcon = () => screen.getByLabelText('save');
  const getValue = (value: string | RegExp = VALUE) => screen.getByDisplayValue(value);

  const utils = render(<EditableInput label={label} value={value} isLoading={isLoading} />);

  return {
    ...utils,
    getLabel,
    getSkeleton,
    getEditIcon,
    getCheckIcon,
    getValue
  };
};

describe('EditableInput', () => {
  it('should render', async () => {
    const { getLabel } = await renderComponent();
    expect(getLabel()).toBeInTheDocument();
  });

  it('should render with loading state', async () => {
    const { getSkeleton } = await renderComponent({ isLoading: true });
    expect(getSkeleton()).toBeInTheDocument();
  });

  it('should render with edit icon', async () => {
    const { getEditIcon } = await renderComponent();
    expect(getEditIcon()).toBeInTheDocument();
  });

  it('should render the value', async () => {
    const { getValue } = await renderComponent();
    expect(getValue()).toBeInTheDocument();
  });

  it('should render with the check icon when is on edit mode', async () => {
    const { getEditIcon, getCheckIcon } = await renderComponent();
    userEvent.click(getEditIcon());

    waitFor(() => {
      expect(getCheckIcon()).toBeInTheDocument();
    });
  });

  it('should render with the edit icon when is on save mode', async () => {
    const { getEditIcon, getCheckIcon } = await renderComponent();
    userEvent.click(getEditIcon());
    userEvent.click(getCheckIcon());

    waitFor(() => {
      expect(getEditIcon()).toBeInTheDocument();
    });
  });

  it('should render with the new value when the input field has changed', async () => {
    const { getEditIcon, getValue } = await renderComponent();
    userEvent.click(getEditIcon());
    userEvent.type(getValue(), 'new value');

    waitFor(() => {
      expect(getValue('new value')).toBeInTheDocument();
    });
  });
});
