// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bem-ai-mcp/filtering';
import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'webhook_secret',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1-beta/webhook-secret',
  operationId: 'generateWebhookSecret',
};

export const tool: Tool = {
  name: 'create_webhook_secret',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerates a new webhook secret to be used for webhook signatures. If a webhook secret already exists, this endpoint will overwrite the previous secret and generate a new one.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/webhook_secret',\n  $defs: {\n    webhook_secret: {\n      type: 'object',\n      properties: {\n        secret: {\n          type: 'string',\n          description: 'Webhook secret for your account.'\n        }\n      },\n      required: [        'secret'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.webhookSecret.create()));
};

export default { metadata, tool, handler };
