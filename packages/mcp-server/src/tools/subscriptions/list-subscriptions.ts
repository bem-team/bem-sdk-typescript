// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-alpha/subscriptions',
  operationId: 'listSubscriptions',
};

export const tool: Tool = {
  name: 'list_subscriptions',
  description: 'List Subscriptions',
  inputSchema: {
    type: 'object',
    properties: {
      endingBefore: {
        type: 'string',
        description:
          'A cursor to use in pagination. `endingBefore` is a task ID that defines your place in the list. For example, if you make a list request and receive 50 objects, starting with `sub_2c9AXIj48cUYJtCuv1gsQtHGDzK`, your subsequent call can include `endingBefore=sub_2c9AXIj48cUYJtCuv1gsQtHGDzK` to fetch the previous page of the list.\n',
      },
      limit: {
        type: 'integer',
        description: 'This specifies a limit on the number of objects to return, ranging between 1 and 100.',
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
          'A cursor to use in pagination. `startingAfter` is a task ID that defines your place in the list. For example, if you make a list request and receive 50 objects, ending with `sub_2c9AXIj48cUYJtCuv1gsQtHGDzK`, your subsequent call can include `startingAfter=sub_2c9AXIj48cUYJtCuv1gsQtHGDzK` to fetch the next page of the list.\n',
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.subscriptions.list(body);
};

export default { metadata, tool, handler };
