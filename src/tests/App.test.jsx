import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App'; 


describe('App Component', () => {

  it('fetches and displays articles when button is clicked', async () => {

  render(<App />);

  const button = screen.getByText('Scrape Articles');
  fireEvent.click(button);

  // Wait for either articles or error message
  await waitFor(() => {

    // waiting for the articles to appear on the DOM
    const articles = screen.queryAllByRole('article');
    expect(articles.length > 0).toBeTruthy();

  }, { timeout: 5000 });
  

  // with the second query we can now make more specific
  const articles = screen.queryAllByRole('article');
    if (articles.length > 0) {

      // verifying the articles array length, should match with the mockArticles length
      expect(articles).toHaveLength(2);
      expect(screen.getByText('The Best Tech Trends of 2021')).toBeInTheDocument();
      expect(screen.getByText('AI taking over jobs')).toBeInTheDocument();
    } else {
      expect(screen.getByText('Issue with the server...')).toBeInTheDocument();
    }
  });
})

  
it('renders headline', () => {
  render(<App />);

  const headline = screen.getByText('HackerNews Scraper');
  expect(headline).toBeInTheDocument();
});

it('renders h1 tag', () => {
  render(<App />);

  const h1 = screen.getByText('Uncover the Hottest Tech Trends:');
  expect(h1).toBeInTheDocument();
});
 
 

  

 
    





