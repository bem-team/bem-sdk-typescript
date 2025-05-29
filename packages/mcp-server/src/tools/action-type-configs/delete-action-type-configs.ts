// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'action_type_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1-alpha/action-type-configs/{actionTypeConfigID}',
  operationId: 'deleteActionTypeConfig',
};

export const tool: Tool = {
  name: 'delete_action_type_configs',
  description: 'Delete an Action Type Config',
  inputSchema: {
    type: 'object',
    properties: {
      actionTypeConfigID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { actionTypeConfigID, ...body } = args as any;
  return client.actionTypeConfigs.delete(actionTypeConfigID);
};

export default { metadata, tool, handler };
