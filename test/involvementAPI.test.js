import fetchMock from 'jest-fetch-mock';
import { getComments } from '../src/modules/involvementAPI.js';

fetchMock.doMock();

describe('Testing involvementAPI', () => {
  test('getComments', async () => {
    const data = await getComments('2266');
    expect(data.length).toBeGreaterThan(0);
  });
});
