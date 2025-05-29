// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BemSDK from 'bem';

const client = new BemSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource events', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.events.retrieve('eventID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.events.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.list(
        {
          actionTypeConfigIDs: ['string'],
          endingBefore: 'endingBefore',
          eventIDs: ['string'],
          eventTypes: ['transform'],
          limit: 1,
          referenceIDs: ['string'],
          sortOrder: 'asc',
          startingAfter: 'startingAfter',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BemSDK.NotFoundError);
  });
});
