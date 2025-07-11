// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bem-ai-mcp/filtering';
import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'transformations',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/v1-beta/transformations',
  operationId: 'updateTransformation',
};

export const tool: Tool = {
  name: 'update_transformations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates a transformation with feedback on the corrected transformation value.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/update_transformation_response',\n  $defs: {\n    update_transformation_response: {\n      type: 'object',\n      properties: {\n        results: {\n          type: 'array',\n          description: 'An array of objects containing all the transformations you want to patch.',\n          items: {\n            type: 'object',\n            properties: {\n              error: {\n                type: 'string',\n                description: 'error message'\n              },\n              success: {\n                type: 'boolean'\n              },\n              transformationID: {\n                type: 'string',\n                description: 'The unique ID you use internally to refer to a transform.'\n              }\n            },\n            required: []\n          }\n        },\n        successCount: {\n          type: 'integer'\n        },\n        totalCount: {\n          type: 'integer'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.transformations.update(body)));
};

export default { metadata, tool, handler };
