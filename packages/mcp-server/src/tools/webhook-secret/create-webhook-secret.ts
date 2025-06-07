// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'webhook_secret',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1-beta/webhook-secret',
  operationId: 'generateWebhookSecret',
};

export const tool: Tool = {
  name: 'create_webhook_secret',
  description:
    'Generates a new webhook secret to be used for webhook signatures. If a webhook secret already exists, this endpoint will overwrite the previous secret and generate a new one.\n',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.webhookSecret.create());
};

export default { metadata, tool, handler };
