import React from 'react';
import { testAppRender } from '../../test/utils/app-test-utils';
import { createTestAppContextData } from '../../test/data/app-test-data';
import { screen } from '@testing-library/react';
import { WorkHistoryScreen } from './WorkHistoryScreen';

describe('<WorkHistoryScreen/>', () => {
  it('renders', () => {
    testAppRender(<WorkHistoryScreen />, createTestAppContextData(), '/');
    const textElement = screen.getByText(/Work History/);
    expect(textElement).toBeInTheDocument();
  });
});
