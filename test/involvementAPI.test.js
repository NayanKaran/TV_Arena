import fetchMock from 'jest-fetch-mock';
import { getComments, getNumberOfComments, postComment } from '../src/modules/involvementAPI.js';

fetchMock.doMock();

describe('Testing involvementAPI', () => {
  test('getComments and postComment function', async () => {
    await postComment('testID', 'John1', 'Great1!');
    const data = await getComments('testID');
    expect(data[data.length - 1].username).toBe('John1');
    expect(data[data.length - 1].comment).toBe('Great1!');
  });
  test('getNumberOfComments function', async () => {
    const comments = await getComments('testID');
    await postComment('testID', 'John', 'Great!');
    await postComment('testID', 'Wale', 'Awesome!');
    expect(comments.length + 2).toBe(getNumberOfComments());
  });
});
