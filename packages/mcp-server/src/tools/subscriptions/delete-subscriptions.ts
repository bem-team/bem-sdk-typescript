// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Deletes an existing subscription.\n',
  inputSchema: {
    type: 'object',
    properties: {
      subscriptionID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { subscriptionID, ...body } = args as any;
  await client.subscriptions.delete(subscriptionID);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
