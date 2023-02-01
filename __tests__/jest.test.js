import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import LandingPage from '../client/containers/LandingPage';
// import LoginForm from '../client/components/LoginForm.jsx';

//landing page
test('Landing page should render', () => {
  render(<LandingPage />);
  const LandingPageElement = screen.getByTestId('landing');
  expect(LandingPageElement).toBeInTheDocument();
});
