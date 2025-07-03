// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-alpha/events/{eventID}',
  operationId: 'getEvent',
};

export const tool: Tool = {
  name: 'retrieve_events',
  description: 'Get an Event',
  inputSchema: {
    type: 'object',
    properties: {
      eventID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { eventID, ...body } = args as any;
  return asTextContentResult(await client.events.retrieve(eventID));
};

export default { metadata, tool, handler };
