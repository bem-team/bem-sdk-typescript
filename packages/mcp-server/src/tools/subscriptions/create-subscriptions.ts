// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bem-ai-mcp/filtering';
import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1-alpha/subscriptions',
  operationId: 'createSubscription',
};

export const tool: Tool = {
  name: 'create_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new subscription to listen to transform or error events.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription',\n  $defs: {\n    subscription: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'Name of subscription.'\n        },\n        subscriptionID: {\n          type: 'string',\n          description: 'The unique identifier of the subscription.'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of subscription.',\n          enum: [            'transform',\n            'route',\n            'split_collection',\n            'split_item',\n            'error',\n            'join'\n          ]\n        },\n        actionTypeConfigID: {\n          type: 'string',\n          description: 'Unique identifier of action subscription listens to. Only associated with pipeline IDs at the moment.'\n        },\n        disabled: {\n          type: 'boolean',\n          description: 'Toggles whether subscription is active or not.'\n        },\n        webhookURL: {\n          type: 'string',\n          description: 'URL bem will send webhook requests to.'\n        }\n      },\n      required: [        'name',\n        'subscriptionID',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      actionTypeConfigID: {
        type: 'string',
        description: 'Unique identifier of action this subscription listens to.',
      },
      name: {
        type: 'string',
        description: 'Name of subscription.',
      },
      type: {
        type: 'string',
        description: 'Type of subscription.',
        enum: ['transform', 'route', 'split_collection', 'split_item', 'error', 'join'],
      },
      disabled: {
        type: 'boolean',
        description: 'Toggles whether subscription is active or not.',
      },
      webhookURL: {
        type: 'string',
        description: 'URL bem will send webhook requests to.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.subscriptions.create(body)));
};

export default { metadata, tool, handler };
