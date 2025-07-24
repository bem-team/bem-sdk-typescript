// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bem-ai-mcp/filtering';
import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'actions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-alpha/actions',
  operationId: 'listActions',
};

export const tool: Tool = {
  name: 'list_actions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Actions\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/get_actions_response',\n  $defs: {\n    get_actions_response: {\n      type: 'object',\n      properties: {\n        actions: {\n          type: 'array',\n          items: {\n            anyOf: [              {\n                allOf: [                  {\n                    $ref: '#/$defs/action_base'\n                  },\n                  {\n                    $ref: '#/$defs/transform_action_base'\n                  }\n                ]\n              },\n              {\n                allOf: [                  {\n                    $ref: '#/$defs/action_base'\n                  },\n                  {\n                    $ref: '#/$defs/route_action_base'\n                  }\n                ]\n              },\n              {\n                allOf: [                  {\n                    $ref: '#/$defs/action_base'\n                  },\n                  {\n                    $ref: '#/$defs/split_action_base'\n                  }\n                ]\n              },\n              {\n                allOf: [                  {\n                    $ref: '#/$defs/action_base'\n                  },\n                  {\n                    $ref: '#/$defs/join_action_base'\n                  }\n                ]\n              },\n              {\n                allOf: [                  {\n                    $ref: '#/$defs/action_base'\n                  },\n                  {\n                    $ref: '#/$defs/email_action_base'\n                  }\n                ]\n              }\n            ]\n          }\n        }\n      }\n    },\n    action_base: {\n      type: 'object',\n      properties: {\n        actionID: {\n          type: 'string'\n        },\n        actionTypeConfigID: {\n          type: 'string'\n        },\n        referenceID: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          description: 'The status of the action.',\n          enum: [            'pending',\n            'running',\n            'completed',\n            'failed'\n          ]\n        }\n      },\n      required: [        'actionID',\n        'actionTypeConfigID',\n        'referenceID',\n        'status'\n      ]\n    },\n    transform_action_base: {\n      type: 'object',\n      properties: {\n        inputContent: {\n          type: 'string',\n          description: 'The file content you want to transform as a base64 encoded string. If the `inputType` is `email`, this is equivalent to the raw format returned by the Gmail API.\\n'\n        },\n        inputType: {\n          $ref: '#/$defs/input_type'\n        }\n      },\n      required: [        'inputContent',\n        'inputType'\n      ]\n    },\n    input_type: {\n      type: 'string',\n      description: 'The input type of the content you\\'re sending for transformation.',\n      enum: [        'email',\n        'pdf',\n        'xlsx',\n        'xls',\n        'docx',\n        'csv',\n        'text',\n        'json',\n        'png',\n        'jpeg',\n        'heic',\n        'heif',\n        'webp',\n        'html',\n        'wav',\n        'mp3',\n        'm4a'\n      ]\n    },\n    route_action_base: {\n      type: 'object',\n      properties: {\n        inputContent: {\n          type: 'string',\n          description: 'The file content you want to route as a base64 encoded string. If the `inputType` is `email`, this is equivalent to the raw format returned by the Gmail API.\\n'\n        },\n        inputType: {\n          $ref: '#/$defs/input_type'\n        }\n      },\n      required: [        'inputContent',\n        'inputType'\n      ]\n    },\n    split_action_base: {\n      type: 'object',\n      properties: {\n        inputContent: {\n          type: 'string',\n          description: 'The file content you want to split as a base64 encoded string. If the `inputType` is `email`, this is equivalent to the raw format returned by the Gmail API.\\n'\n        },\n        inputType: {\n          $ref: '#/$defs/input_type'\n        }\n      },\n      required: [        'inputContent',\n        'inputType'\n      ]\n    },\n    join_action_base: {\n      type: 'object',\n      properties: {\n        inputs: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              inputContent: {\n                type: 'string',\n                description: 'The file content you want to transform as a base64 encoded string. If the `inputType` is `email`, this is equivalent to the raw format returned by the Gmail API.\\n'\n              },\n              inputType: {\n                $ref: '#/$defs/input_type'\n              },\n              itemReferenceID: {\n                type: 'string',\n                description: 'The unique ID you use internally to refer to this data point.'\n              }\n            },\n            required: [              'inputContent',\n              'inputType'\n            ]\n          }\n        },\n        joinType: {\n          type: 'string',\n          enum: [            'standard'\n          ]\n        }\n      },\n      required: [        'inputs',\n        'joinType'\n      ]\n    },\n    email_action_base: {\n      type: 'object',\n      properties: {\n        templateVariables: {\n          type: 'object',\n          description: 'Template variables to be used in the email body and subject. Templates are injected into the email body and subject as `{{template_variable}}`.\\n'\n        }\n      },\n      required: [        'templateVariables'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      actionIDs: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
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
          'A cursor to use in pagination. `endingBefore` is an action ID that defines your place in the list.\n',
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
          'A cursor to use in pagination. `startingAfter` is an action ID that defines your place in the list.\n',
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
  return asTextContentResult(await maybeFilter(args, await client.actions.list(body)));
};

export default { metadata, tool, handler };
