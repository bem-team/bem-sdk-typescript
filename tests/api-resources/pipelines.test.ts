// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BemSDK from 'bem-ai';

const client = new BemSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pipelines', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.pipelines.create({
      name: 'Freight Load Pipeline',
      outputSchema: {
        value: {
          type: 'object',
          required: ['tenders'],
          properties: {
            tenders: {
              type: 'array',
              items: {
                type: 'object',
                required: [
                  'loadReference',
                  'origin',
                  'destination',
                  'weightTons',
                  'loadType',
                  'desiredDeliveryDate',
                  'bidSubmissionDeadline',
                  'submitter',
                ],
                properties: {
                  origin: { type: 'string', description: 'The starting point of the shipment.' },
                  loadType: { type: 'string', description: 'The type of goods being shipped.' },
                  submitter: {
                    type: 'object',
                    required: ['name', 'position', 'contactInfo'],
                    properties: {
                      name: { type: 'string', description: 'Name of the person submitting the tender.' },
                      position: {
                        type: 'string',
                        description: 'Position of the submitter within their company.',
                      },
                      contactInfo: {
                        type: 'object',
                        required: ['email'],
                        properties: {
                          email: {
                            type: 'string',
                            format: 'email',
                            description: 'Email address of the submitter.',
                          },
                          phone: { type: 'string', description: 'Phone number of the submitter.' },
                        },
                      },
                    },
                  },
                  weightTons: { type: 'number', description: 'The weight of the load in tons.' },
                  destination: { type: 'string', description: 'The endpoint of the shipment.' },
                  loadReference: { type: 'string', description: 'Unique identifier for the load tender.' },
                  desiredDeliveryDate: {
                    type: 'string',
                    format: 'date',
                    description: 'The preferred date for the shipment to be delivered.',
                  },
                  bidSubmissionDeadline: {
                    type: 'string',
                    format: 'date',
                    description: 'The deadline for submitting bids.',
                  },
                },
              },
            },
          },
        },
      },
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
    const response = await client.pipelines.create({
      name: 'Freight Load Pipeline',
      outputSchema: {
        value: {
          type: 'object',
          required: ['tenders'],
          properties: {
            tenders: {
              type: 'array',
              items: {
                type: 'object',
                required: [
                  'loadReference',
                  'origin',
                  'destination',
                  'weightTons',
                  'loadType',
                  'desiredDeliveryDate',
                  'bidSubmissionDeadline',
                  'submitter',
                ],
                properties: {
                  origin: { type: 'string', description: 'The starting point of the shipment.' },
                  loadType: { type: 'string', description: 'The type of goods being shipped.' },
                  submitter: {
                    type: 'object',
                    required: ['name', 'position', 'contactInfo'],
                    properties: {
                      name: { type: 'string', description: 'Name of the person submitting the tender.' },
                      position: {
                        type: 'string',
                        description: 'Position of the submitter within their company.',
                      },
                      contactInfo: {
                        type: 'object',
                        required: ['email'],
                        properties: {
                          email: {
                            type: 'string',
                            format: 'email',
                            description: 'Email address of the submitter.',
                          },
                          phone: { type: 'string', description: 'Phone number of the submitter.' },
                        },
                      },
                    },
                  },
                  weightTons: { type: 'number', description: 'The weight of the load in tons.' },
                  destination: { type: 'string', description: 'The endpoint of the shipment.' },
                  loadReference: { type: 'string', description: 'Unique identifier for the load tender.' },
                  desiredDeliveryDate: {
                    type: 'string',
                    format: 'date',
                    description: 'The preferred date for the shipment to be delivered.',
                  },
                  bidSubmissionDeadline: {
                    type: 'string',
                    format: 'date',
                    description: 'The deadline for submitting bids.',
                  },
                },
              },
            },
          },
        },
      },
      actionConfig: {
        actionTypeConfigID: 'actionTypeConfigID',
        name: 'name',
        actionType: 'transform',
        complexTabularTransformEnabled: true,
        emailAddress: 'eml_2c9AXFXHwiaL4vPXDTOS171OJ8T@pipeline.bem.ai',
        independentDocumentProcessingEnabled: false,
        outputSchema: {
          value: {
            type: 'object',
            required: ['tenders'],
            properties: {
              tenders: {
                type: 'array',
                items: {
                  type: 'object',
                  required: [
                    'loadReference',
                    'origin',
                    'destination',
                    'weightTons',
                    'loadType',
                    'desiredDeliveryDate',
                    'bidSubmissionDeadline',
                    'submitter',
                  ],
                  properties: {
                    origin: { type: 'string', description: 'The starting point of the shipment.' },
                    loadType: { type: 'string', description: 'The type of goods being shipped.' },
                    submitter: {
                      type: 'object',
                      required: ['name', 'position', 'contactInfo'],
                      properties: {
                        name: { type: 'string', description: 'Name of the person submitting the tender.' },
                        position: {
                          type: 'string',
                          description: 'Position of the submitter within their company.',
                        },
                        contactInfo: {
                          type: 'object',
                          required: ['email'],
                          properties: {
                            email: {
                              type: 'string',
                              format: 'email',
                              description: 'Email address of the submitter.',
                            },
                            phone: { type: 'string', description: 'Phone number of the submitter.' },
                          },
                        },
                      },
                    },
                    weightTons: { type: 'number', description: 'The weight of the load in tons.' },
                    destination: { type: 'string', description: 'The endpoint of the shipment.' },
                    loadReference: { type: 'string', description: 'Unique identifier for the load tender.' },
                    desiredDeliveryDate: {
                      type: 'string',
                      format: 'date',
                      description: 'The preferred date for the shipment to be delivered.',
                    },
                    bidSubmissionDeadline: {
                      type: 'string',
                      format: 'date',
                      description: 'The deadline for submitting bids.',
                    },
                  },
                },
              },
            },
          },
        },
        outputSchemaName: 'Freight Load Schema',
        nextActionTypeConfigID: 'nextActionTypeConfigID',
      },
      complexTabularTransformEnabled: false,
      independentDocumentProcessingEnabled: false,
      outputSchemaName: 'Freight Load Schema',
      webhookEnabled: true,
      webhookURL: 'https://bem-example.ai/test/url',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.pipelines.retrieve('pipelineID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.pipelines.update('pipelineID', {});
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
    const responsePromise = client.pipelines.list();
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
      client.pipelines.list(
        { endingBefore: 'endingBefore', limit: 1, startingAfter: 'startingAfter' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BemSDK.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.pipelines.delete('pipelineID');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
