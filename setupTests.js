

import '@testing-library/jest-dom'

// import the server we have created in the server.js file within mocks folder
import { server } from './src/mocks/server';

// Setup server and enable mocking in tests

// Enable API mocking before tests run
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any runtime request handlers we may add during the tests
afterEach(() => server.resetHandlers());

// clean up after the tests are finished.
afterAll(() => server.close());