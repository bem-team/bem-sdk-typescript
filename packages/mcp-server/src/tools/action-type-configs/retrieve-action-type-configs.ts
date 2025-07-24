// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bem-ai-mcp/filtering';
import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet an Action Type Config\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_type_config',\n  $defs: {\n    action_type_config: {\n      anyOf: [        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ],\n          description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        }\n      ],\n      description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n    },\n    action_type_config_base: {\n      type: 'object',\n      properties: {\n        actionTypeConfigID: {\n          type: 'string',\n          description: 'Unique identifier of action type config.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of action type config.'\n        }\n      },\n      required: [        'actionTypeConfigID',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      actionTypeConfigID: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['actionTypeConfigID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { actionTypeConfigID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.actionTypeConfigs.retrieve(actionTypeConfigID)),
  );
};

export default { metadata, tool, handler };
