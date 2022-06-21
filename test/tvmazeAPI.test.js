import { getShowDetails } from "../src/modules/tvmazeAPI.js";
import fetchMock from 'jest-fetch-mock';
fetchMock.doMock()

describe("Testing tvmazeAPI", () => {
  test("getShowDetails", async () => {
    const data = await getShowDetails('2266');
    expect(data.id).toBe(2266);
  });
});
