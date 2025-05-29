// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1-alpha/subscriptions/{subscriptionID}',
  operationId: 'updateSubscription',
};

export const tool: Tool = {
  name: 'update_subscriptions',
  description:
    'Updates an existing subscription. Follow conventional PATCH behavior, so only included fields will be updated.\n',
  inputSchema: {
    type: 'object',
    properties: {
      subscriptionID: {
        type: 'string',
      },
      actionTypeConfigID: {
        type: 'string',
        description: 'Unique identifier of action this subscription listens to.',
      },
      disabled: {
        type: 'boolean',
        description: 'Toggles whether subscription is active or not.',
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
      webhookURL: {
        type: 'string',
        description: 'URL bem will send webhook requests to.',
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { subscriptionID, ...body } = args as any;
  return client.subscriptions.update(subscriptionID, body);
};

export default { metadata, tool, handler };
