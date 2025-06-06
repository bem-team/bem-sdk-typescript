// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'action_type_configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-alpha/action-type-configs/{actionTypeConfigID}',
  operationId: 'getActionTypeConfig',
};

export const tool: Tool = {
  name: 'retrieve_action_type_configs',
  description: 'Get an Action Type Config',
  inputSchema: {
    type: 'object',
    properties: {
      actionTypeConfigID: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { actionTypeConfigID, ...body } = args as any;
  return asTextContentResult(await client.actionTypeConfigs.retrieve(actionTypeConfigID));
};

export default { metadata, tool, handler };
