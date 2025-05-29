// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'events',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-alpha/events',
  operationId: 'listEvents',
};

export const tool: Tool = {
  name: 'list_events',
  description: 'List Events',
  inputSchema: {
    type: 'object',
    properties: {
      actionTypeConfigIDs: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      endingBefore: {
        type: 'string',
        description:
          'A cursor to use in pagination. `endingBefore` is an event ID that defines your place in the list.\n',
      },
      eventIDs: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      eventTypes: {
        type: 'array',
        items: {
          type: 'string',
          description: 'The type of the event.',
          enum: ['transform', 'route', 'split_collection', 'split_item', 'error', 'join'],
        },
      },
      limit: {
        type: 'integer',
      },
      referenceIDs: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      sortOrder: {
        type: 'string',
        description:
          'Specifies sorting behavior. The two options are `asc` and `desc` to sort ascending and descending respectively, with default sort being ascending. Paging works in both directions.',
        enum: ['asc', 'desc'],
      },
      startingAfter: {
        type: 'string',
        description:
          'A cursor to use in pagination. `startingAfter` is an event ID that defines your place in the list.\n',
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.events.list(body);
};

export default { metadata, tool, handler };
