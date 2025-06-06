// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'transformations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-beta/transformations',
  operationId: 'listTransformations',
};

export const tool: Tool = {
  name: 'list_transformations',
  description: 'Lists all performed transformations, with either pagination or specific reference IDs.',
  inputSchema: {
    type: 'object',
    properties: {
      endingBefore: {
        type: 'string',
        description:
          'A cursor to use in pagination. `endingBefore` is a transform ID that defines your place in the list. For example, if you make a list request and receive 50 objects, starting with `tr_2bxoJPNdSD4LgRT4YVC4gt72hlI`, your subsequent call can include `endingBefore=tr_2bxoJPNdSD4LgRT4YVC4gt72hlI` to fetch the previous page of the list.\n',
      },
      itemOffset: {
        type: 'integer',
        description:
          'Filters based on the index of the page of the document you had transformed. For CSV transformations, this offset represents starting row of the CSV for which you want to fetch transformations for. For PDF transformations, this offset represents the starting page of the PDF. This applies for a specific reference ID of a transformation. Note that this only applies if you specify one reference ID in `referenceIDs` and if you have `independentDocumentProcessingEnabled` set to `true` in your pipeline configuration. Note that this is zero-indexed.\n',
      },
      limit: {
        type: 'integer',
        description: 'This specifies a limit on the number of objects to return, ranging between 1 and 100.',
      },
      pipelineID: {
        type: 'string',
        description:
          'The unique ID for a given pipeline. Will filter to just the transformations processed by the given pipeline. If left out, will query over ALL transformations for your account.\n',
      },
      published: {
        type: 'boolean',
        description:
          'Boolean that toggles filtering whether or not transformations were successfully published via webhook.\n',
      },
      publishedAfter: {
        type: 'string',
        description:
          'Filters to transformations successfully published via webhook after the specified date. Must be in RFC 3339 format.\n',
        format: 'date-time',
      },
      publishedBefore: {
        type: 'string',
        description:
          'Filters to transformations successfully published via webhook before the specified date. Must be in RFC 3339 format.\n',
        format: 'date-time',
      },
      referenceIDs: {
        type: 'array',
        description: 'Array with the reference IDs of the transformed data points. Formatted as a CSV array.',
        items: {
          type: 'string',
        },
      },
      sortOrder: {
        type: 'string',
        description:
          'Specifies sorting behavior. The two options are `asc` and `desc` to sort ascending and descending respectively, with default sort being ascending. Paging works in both directions.',
        enum: ['asc', 'desc'],
      },
      startingAfter: {
        type: 'string',
        description:
          'A cursor to use in pagination. `startingAfter` is a transform ID that defines your place in the list. For example, if you make a list request and receive 50 objects, ending with `tr_2bxoJPNdSD4LgRT4YVC4gt72hlI`, your subsequent call can include `startingAfter=tr_2bxoJPNdSD4LgRT4YVC4gt72hlI` to fetch the next page of the list.\n',
      },
      transformationIDs: {
        type: 'array',
        description: 'Array with the transform IDs of the transformed data points. Formatted as a CSV array.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.transformations.list(body));
};

export default { metadata, tool, handler };
