// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1-alpha/subscriptions/{subscriptionID}',
  operationId: 'deleteSubscription',
};

export const tool: Tool = {
  name: 'delete_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDeletes an existing subscription.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      subscriptionID: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['subscriptionID'],
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { subscriptionID, ...body } = args as any;
  const response = await client.subscriptions.delete(subscriptionID).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
