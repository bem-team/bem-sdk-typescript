// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'actions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1-alpha/actions/route',
  operationId: 'updateRouteAction',
};

export const tool: Tool = {
  name: 'correct_route_actions',
  description: 'Updates a route event with feedback on the desired router choices.\n',
  inputSchema: {
    type: 'object',
    properties: {
      routeActions: {
        type: 'array',
        description: 'An array of objects containing all the route actions you want to submit feedback for.',
        items: {
          type: 'object',
          properties: {
            actionID: {
              type: 'string',
              description: 'The action ID of the relevant route action.',
            },
            correctedChoice: {
              type: 'string',
              description: 'The desired route that should have been chosen.',
            },
          },
          required: [],
        },
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.actions.correctRoute(body);
};

export default { metadata, tool, handler };
