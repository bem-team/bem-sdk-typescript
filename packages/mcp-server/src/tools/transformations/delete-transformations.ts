// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'transformations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1-beta/transformations',
  operationId: 'deleteTransformations',
};

export const tool: Tool = {
  name: 'delete_transformations',
  description:
    'Deletes transformations by specifying pipeline ID, list of reference IDs, or list of transformation IDs. Will delete intersection of all params specified.\n',
  inputSchema: {
    type: 'object',
    properties: {
      pipelineID: {
        type: 'string',
        description:
          'The unique ID for a given pipeline. Will filter to just the transformations processed by the given pipeline. If left out, will query over ALL transformations for your account.\n',
      },
      referenceIDs: {
        type: 'array',
        description: 'Array with the reference IDs of the transformed data points. Formatted as a CSV array.',
        items: {
          type: 'string',
        },
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
  return asTextContentResult(await client.transformations.delete(body));
};

export default { metadata, tool, handler };
