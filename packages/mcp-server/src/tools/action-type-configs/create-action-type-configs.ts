// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Create an Action Type Config',
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
        required: [],
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
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.actionTypeConfigs.create(body));
};

export default { metadata, tool, handler };
