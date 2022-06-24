import fetchMock from 'jest-fetch-mock';
import { getShowsInfo, getNumberOfItems } from '../src/modules/tvmazeAPI.js';

fetchMock.doMock();

describe('Testing tvmazeAPI', () => {
  test('getNumberOfItems', async () => {
    const items = await getShowsInfo();
    expect(getNumberOfItems()).toBe(items.length);
  });
});
