// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'actions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1-alpha/actions',
  operationId: 'createActions',
};

export const tool: Tool = {
  name: 'create_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a batch of Actions",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          actions: {
            type: 'array',
            items: {
              allOf: [
                {
                  $ref: '#/$defs/create_action_base',
                },
                {
                  $ref: '#/$defs/transform_action_base',
                },
              ],
            },
          },
          actionType: {
            $ref: '#/$defs/action_type',
          },
          actionTypeConfigID: {
            type: 'string',
          },
        },
        required: ['actions', 'actionType', 'actionTypeConfigID'],
      },
      {
        type: 'object',
        properties: {
          actions: {
            type: 'array',
            items: {
              allOf: [
                {
                  $ref: '#/$defs/create_action_base',
                },
                {
                  $ref: '#/$defs/route_action_base',
                },
              ],
            },
          },
          actionType: {
            $ref: '#/$defs/action_type',
          },
          actionTypeConfigID: {
            type: 'string',
          },
        },
        required: ['actions', 'actionType', 'actionTypeConfigID'],
      },
      {
        type: 'object',
        properties: {
          actions: {
            type: 'array',
            items: {
              allOf: [
                {
                  $ref: '#/$defs/create_action_base',
                },
                {
                  $ref: '#/$defs/split_action_base',
                },
              ],
            },
          },
          actionType: {
            $ref: '#/$defs/action_type',
          },
          actionTypeConfigID: {
            type: 'string',
          },
        },
        required: ['actions', 'actionType', 'actionTypeConfigID'],
      },
      {
        type: 'object',
        properties: {
          actions: {
            type: 'array',
            items: {
              allOf: [
                {
                  $ref: '#/$defs/create_action_base',
                },
                {
                  $ref: '#/$defs/join_action_base',
                },
              ],
            },
          },
          actionType: {
            $ref: '#/$defs/action_type',
          },
          actionTypeConfigID: {
            type: 'string',
          },
        },
        required: ['actions', 'actionType', 'actionTypeConfigID'],
      },
      {
        type: 'object',
        properties: {
          actionType: {
            $ref: '#/$defs/action_type',
          },
          actionTypeConfigID: {
            type: 'string',
          },
          actions: {
            type: 'array',
            items: {
              allOf: [
                {
                  $ref: '#/$defs/create_action_base',
                },
                {
                  $ref: '#/$defs/email_action_base',
                },
              ],
            },
          },
        },
        required: ['actionType', 'actionTypeConfigID'],
      },
    ],
    $defs: {
      create_action_base: {
        type: 'object',
        properties: {
          referenceID: {
            type: 'string',
          },
        },
        required: ['referenceID'],
      },
      transform_action_base: {
        type: 'object',
        properties: {
          inputContent: {
            type: 'string',
            description:
              'The file content you want to transform as a base64 encoded string. If the `inputType` is `email`, this is equivalent to the raw format returned by the Gmail API.\n',
          },
          inputType: {
            $ref: '#/$defs/input_type',
          },
        },
        required: ['inputContent', 'inputType'],
      },
      input_type: {
        type: 'string',
        description: "The input type of the content you're sending for transformation.",
        enum: [
          'email',
          'pdf',
          'xlsx',
          'xls',
          'docx',
          'csv',
          'text',
          'json',
          'png',
          'jpeg',
          'heic',
          'heif',
          'webp',
          'html',
          'wav',
          'mp3',
          'm4a',
        ],
      },
      action_type: {
        type: 'string',
        description: 'The type of the action.',
        enum: ['transform', 'route', 'split', 'join', 'email'],
      },
      route_action_base: {
        type: 'object',
        properties: {
          inputContent: {
            type: 'string',
            description:
              'The file content you want to route as a base64 encoded string. If the `inputType` is `email`, this is equivalent to the raw format returned by the Gmail API.\n',
          },
          inputType: {
            $ref: '#/$defs/input_type',
          },
        },
        required: ['inputContent', 'inputType'],
      },
      split_action_base: {
        type: 'object',
        properties: {
          inputContent: {
            type: 'string',
            description:
              'The file content you want to split as a base64 encoded string. If the `inputType` is `email`, this is equivalent to the raw format returned by the Gmail API.\n',
          },
          inputType: {
            $ref: '#/$defs/input_type',
          },
        },
        required: ['inputContent', 'inputType'],
      },
      join_action_base: {
        type: 'object',
        properties: {
          inputs: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                inputContent: {
                  type: 'string',
                  description:
                    'The file content you want to transform as a base64 encoded string. If the `inputType` is `email`, this is equivalent to the raw format returned by the Gmail API.\n',
                },
                inputType: {
                  $ref: '#/$defs/input_type',
                },
                itemReferenceID: {
                  type: 'string',
                  description: 'The unique ID you use internally to refer to this data point.',
                },
              },
              required: ['inputContent', 'inputType'],
            },
          },
          joinType: {
            type: 'string',
            enum: ['standard'],
          },
        },
        required: ['inputs', 'joinType'],
      },
      email_action_base: {
        type: 'object',
        properties: {
          templateVariables: {
            type: 'object',
            description:
              'Template variables to be used in the email body and subject. Templates are injected into the email body and subject as `{{template_variable}}`.\n',
          },
        },
        required: ['templateVariables'],
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.actions.create(body));
};

export default { metadata, tool, handler };
