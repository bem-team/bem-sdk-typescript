// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1-alpha/subscriptions',
  operationId: 'createSubscription',
};

export const tool: Tool = {
  name: 'create_subscriptions',
  description: 'Creates a new subscription to listen to transform or error events.\n',
  inputSchema: {
    type: 'object',
    properties: {
      actionTypeConfigID: {
        type: 'string',
        description: 'Unique identifier of action this subscription listens to.',
      },
      name: {
        type: 'string',
        description: 'Name of subscription.',
      },
      type: {
        type: 'string',
        description: 'Type of subscription.',
        enum: ['transform', 'route', 'split_collection', 'split_item', 'error', 'join'],
      },
      disabled: {
        type: 'boolean',
        description: 'Toggles whether subscription is active or not.',
      },
      webhookURL: {
        type: 'string',
        description: 'URL bem will send webhook requests to.',
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.subscriptions.create(body));
};

export default { metadata, tool, handler };
