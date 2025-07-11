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
  httpMethod: 'delete',
  httpPath: '/v1-beta/transformations',
  operationId: 'deleteTransformations',
};

export const tool: Tool = {
  name: 'delete_transformations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes transformations by specifying pipeline ID, list of reference IDs, or list of transformation IDs. Will delete intersection of all params specified.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    deleteCount: {\n      type: 'integer',\n      description: 'count of transformations successfully deleted.'\n    }\n  },\n  required: []\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.transformations.delete(body)));
};

export default { metadata, tool, handler };
