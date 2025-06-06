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
  httpPath: '/v1-beta/transformations/errors',
  operationId: 'listTransformationErrors',
};

export const tool: Tool = {
  name: 'list_errors_transformations',
  description:
    'Lists all errors encountered while attempting to transform data, with either pagination or specific reference IDs.\n',
  inputSchema: {
    type: 'object',
    properties: {
      referenceIDs: {
        type: 'array',
        description: 'Array with the reference IDs of the transformed data points. Formatted as a CSV array.',
        items: {
          type: 'string',
        },
      },
      endingBefore: {
        type: 'string',
        description:
          'A cursor to use in pagination. `endingBefore` is a transform ID that defines your place in the list. For example, if you make a list request and receive 50 objects, starting with `tr_2bxoJPNdSD4LgRT4YVC4gt72hlI`, your subsequent call can include `endingBefore=tr_2bxoJPNdSD4LgRT4YVC4gt72hlI` to fetch the previous page of the list.\n',
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
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.transformations.listErrors(body));
};

export default { metadata, tool, handler };
