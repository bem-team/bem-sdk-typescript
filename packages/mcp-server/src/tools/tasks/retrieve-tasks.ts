// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-alpha/tasks/{taskID}',
  operationId: 'getTask',
};

export const tool: Tool = {
  name: 'retrieve_tasks',
  description: 'Get a Task',
  inputSchema: {
    type: 'object',
    properties: {
      taskID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { taskID, ...body } = args as any;
  return asTextContentResult(await client.tasks.retrieve(taskID));
};

export default { metadata, tool, handler };
