// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BemSDK from 'bem-ai';

const client = new BemSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transformations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.transformations.create({
      pipelineID: 'pl_2c9AXIj48cUYJtCuv1gsQtHGDzK',
      transformations: [
        { inputContent: 'U3RhaW5sZXNzIHJvY2tz', inputType: 'email', referenceID: 'referenceID' },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.transformations.create({
      pipelineID: 'pl_2c9AXIj48cUYJtCuv1gsQtHGDzK',
      transformations: [
        { inputContent: 'U3RhaW5sZXNzIHJvY2tz', inputType: 'email', referenceID: 'referenceID' },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.transformations.update({});
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
    const responsePromise = client.transformations.list();
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
      client.transformations.list(
        {
          endingBefore: 'endingBefore',
          itemOffset: 0,
          limit: 1,
          pipelineID: 'pipelineID',
          published: true,
          publishedAfter: '2019-12-27T18:11:19.117Z',
          publishedBefore: '2019-12-27T18:11:19.117Z',
          referenceIDs: ['string'],
          sortOrder: 'asc',
          startingAfter: 'startingAfter',
          transformationIDs: ['string'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BemSDK.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.transformations.delete();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transformations.delete(
        { pipelineID: 'pipelineID', referenceIDs: ['string'], transformationIDs: ['string'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BemSDK.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('deprecatedUpdate', async () => {
    const responsePromise = client.transformations.deprecatedUpdate({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listErrors: only required params', async () => {
    const responsePromise = client.transformations.listErrors({ referenceIDs: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listErrors: required and optional params', async () => {
    const response = await client.transformations.listErrors({
      referenceIDs: ['string'],
      endingBefore: 'endingBefore',
      limit: 1,
      pipelineID: 'pipelineID',
      sortOrder: 'asc',
      startingAfter: 'startingAfter',
    });
  });
});
