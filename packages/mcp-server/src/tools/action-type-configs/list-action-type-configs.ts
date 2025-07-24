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
  httpPath: '/v1-alpha/action-type-configs',
  operationId: 'listActionTypeConfigs',
};

export const tool: Tool = {
  name: 'list_action_type_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Action Type Configs\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    actionTypeConfigs: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/action_type_config'\n      }\n    }\n  },\n  $defs: {\n    action_type_config: {\n      anyOf: [        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ],\n          description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        }\n      ],\n      description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n    },\n    action_type_config_base: {\n      type: 'object',\n      properties: {\n        actionTypeConfigID: {\n          type: 'string',\n          description: 'Unique identifier of action type config.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of action type config.'\n        }\n      },\n      required: [        'actionTypeConfigID',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
          'A cursor to use in pagination. `endingBefore` is an action type config ID that defines your place in the list.\n',
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
          'A cursor to use in pagination. `startingAfter` is an action type config ID that defines your place in the list.\n',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      action_type: {
        type: 'string',
        description: 'The type of the action.',
        enum: ['transform', 'route', 'split', 'join', 'email'],
      },
    },
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.actionTypeConfigs.list(body)));
};

export default { metadata, tool, handler };
