import { http, HttpResponse } from 'msw';

// msw acts as a pretend server during the test
// intercepts requests that our React app makes and returns fake responses
// it will return the articles array with article objects I have defined below

export const mockArticles = [
  { title: 'The Best Tech Trends of 2021', posted: '2 mins ago' },
  { title: 'AI taking over jobs', posted: '5 mins ago' },
]

export const handlers = [
  http.get('http://localhost:4000', () => {
    return HttpResponse.json(mockArticles)
  }),
]