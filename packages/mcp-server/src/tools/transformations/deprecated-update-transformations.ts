// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'transformations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1-beta/transformations',
  operationId: 'deprecatedUpdateTransformation',
};

export const tool: Tool = {
  name: 'deprecated_update_transformations',
  description:
    'Deprecating will be replaced by put. Updates a transformation with feedback on the corrected transformation value.\n',
  inputSchema: {
    type: 'object',
    properties: {
      transformations: {
        type: 'array',
        description: 'An array of objects containing all the transformations you want to patch.',
        items: {
          type: 'object',
          properties: {
            correctedJSON: {
              type: 'object',
              description: 'The object with properties of the transformation that you want updated.',
            },
            orderMatching: {
              type: 'boolean',
              description: 'True if order in the array matters. Default is false.',
            },
            transformationID: {
              type: 'string',
              description: 'The unique ID you use internally to refer to a transform.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.transformations.deprecatedUpdate(body);
};

export default { metadata, tool, handler };
