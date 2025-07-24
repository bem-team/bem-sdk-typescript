// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bem-ai-mcp/filtering';
import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'action_type_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1-alpha/action-type-configs',
  operationId: 'createActionTypeConfig',
};

export const tool: Tool = {
  name: 'create_action_type_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an Action Type Config\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_type_config',\n  $defs: {\n    action_type_config: {\n      anyOf: [        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ],\n          description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        }\n      ],\n      description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n    },\n    action_type_config_base: {\n      type: 'object',\n      properties: {\n        actionTypeConfigID: {\n          type: 'string',\n          description: 'Unique identifier of action type config.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of action type config.'\n        }\n      },\n      required: [        'actionTypeConfigID',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          body: {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_create_base',
              },
              {
                $ref: '#/$defs/upsert_transform_config',
              },
            ],
          },
        },
        required: ['body'],
      },
      {
        type: 'object',
        properties: {
          body: {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_create_base',
              },
              {
                $ref: '#/$defs/upsert_route_config',
              },
            ],
          },
        },
        required: ['body'],
      },
      {
        type: 'object',
        properties: {
          body: {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_create_base',
              },
              {
                $ref: '#/$defs/upsert_split_config',
              },
            ],
          },
        },
        required: ['body'],
      },
      {
        type: 'object',
        properties: {
          body: {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_create_base',
              },
              {
                $ref: '#/$defs/upsert_join_config',
              },
            ],
          },
        },
        required: ['body'],
      },
      {
        type: 'object',
        properties: {
          body: {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_create_base',
              },
              {
                $ref: '#/$defs/upsert_email_config',
              },
            ],
          },
        },
        required: ['body'],
      },
    ],
    $defs: {
      action_type_config_create_base: {
        type: 'object',
        properties: {
          actionType: {
            $ref: '#/$defs/action_type',
          },
        },
        required: ['actionType'],
      },
      action_type: {
        type: 'string',
        description: 'The type of the action.',
        enum: ['transform', 'route', 'split', 'join', 'email'],
      },
      upsert_transform_config: {
        allOf: [
          {
            $ref: '#/$defs/action_type_config_upsert_base',
          },
        ],
      },
      action_type_config_upsert_base: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
        },
      },
      upsert_route_config: {
        allOf: [
          {
            $ref: '#/$defs/action_type_config_upsert_base',
          },
        ],
      },
      upsert_split_config: {
        allOf: [
          {
            $ref: '#/$defs/action_type_config_upsert_base',
          },
        ],
      },
      upsert_join_config: {
        allOf: [
          {
            $ref: '#/$defs/action_type_config_upsert_base',
          },
        ],
      },
      upsert_email_config: {
        allOf: [
          {
            $ref: '#/$defs/action_type_config_upsert_base',
          },
        ],
      },
    },
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
  annotations: {},
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.actionTypeConfigs.create(body)));
};

export default { metadata, tool, handler };
