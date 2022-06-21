import {getComments} from '../src/modules/involvementAPI.js'
import fetchMock from 'jest-fetch-mock';

fetchMock.doMock();

describe('Testing involvementAPI', () => {
  test('getComments', async () => {
    try {
        const data = await getComments('2266');
        console.log(data)
        expect(data.length).toBeGreaterThan(0);
    } catch (error) {
        console.log(error.message)
    }
  });
});
