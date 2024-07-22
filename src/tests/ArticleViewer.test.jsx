// src/components/ArticleViewer.test.jsx
import { render, screen, waitFor } from '@testing-library/react';
import ArticleViewer from '../components/ArticleViewer'; // Adjust import as needed
import { expect } from 'vitest';
import { mockArticles } from '../mocks/handlers';

test('renders articles when provided', () => {
 
  // render the ArticleViewer component with mock articles data specified using msw handlers
  render(<ArticleViewer articles={mockArticles} isLoading={false} error={false} />);

  expect(screen.getByText('The Best Tech Trends of 2021')).toBeInTheDocument();
  expect(screen.getByText('AI taking over jobs')).toBeInTheDocument();
});

test('shows loading spinner', () => { 
  render(<ArticleViewer articles={[]} isLoading={true} error={false} />);

  // added a data-testId attribute to the loader icon in the ArticleViewer component to make it easier to target in the test
  const loader = screen.getByTestId('loader');
  expect(loader).toBeInTheDocument();
});


test('shows error message', () => {
  render(<ArticleViewer articles={[]} isLoading={false} error={true} />);
  expect(screen.getByText('Issue with the server...')).toBeInTheDocument();
});
