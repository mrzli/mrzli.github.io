import React from 'react';
import { testAppRender } from '../../test/utils/app-test-utils';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { screen } from '@testing-library/react';
import { IntroScreen } from './IntroScreen';

describe('<IntroScreen/>', () => {
  it('renders', () => {
    testAppRender(<IntroScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/Name & Contact/);
    expect(textElement).toBeInTheDocument();
  });
});
