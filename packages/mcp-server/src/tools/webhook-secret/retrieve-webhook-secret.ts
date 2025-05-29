// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'webhook_secret',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-beta/webhook-secret',
  operationId: 'getWebhookSecret',
};

export const tool: Tool = {
  name: 'retrieve_webhook_secret',
  description: 'Gets the current webhook secret for your account.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  return client.webhookSecret.retrieve();
};

export default { metadata, tool, handler };
