import fetchMock from 'jest-fetch-mock';
import { getComments, getNumberOfComments } from '../src/modules/involvementAPI.js';

fetchMock.doMock();

describe('Testing involvementAPI', () => {
  test('getComments function', async () => {
    const data = await getComments('2266');
    expect(data.length).toBeGreaterThan(0);
  });
  test('getNumberOfComments function', async () => {
    const comments = await getComments('2266');
    expect(comments.length).toBe(getNumberOfComments(comments));
  });
});
