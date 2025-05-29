// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-alpha/actions',
  operationId: 'listActions',
};

export const tool: Tool = {
  name: 'list_actions',
  description: 'List Actions',
  inputSchema: {
    type: 'object',
    properties: {
      actionIDs: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      actionType: {
        $ref: '#/$defs/action_type',
      },
      actionTypeConfigIDs: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      endingBefore: {
        type: 'string',
        description:
          'A cursor to use in pagination. `endingBefore` is an action ID that defines your place in the list.\n',
      },
      limit: {
        type: 'integer',
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
          'A cursor to use in pagination. `startingAfter` is an action ID that defines your place in the list.\n',
      },
    },
    $defs: {
      action_type: {
        type: 'string',
        description: 'The type of the action.',
        enum: ['transform', 'route', 'split', 'join', 'email'],
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.actions.list(body);
};

export default { metadata, tool, handler };
