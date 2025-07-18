// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bem-ai-mcp/filtering';
import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-beta/pipelines',
  operationId: 'listPipelines',
};

export const tool: Tool = {
  name: 'list_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves configurations for all existing pipelines.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/pipeline'\n  },\n  $defs: {\n    pipeline: {\n      type: 'object',\n      properties: {\n        complexTabularTransformEnabled: {\n          type: 'boolean',\n          description: 'Whether complex tabular transforms are enabled on the pipeline. This enables the pipeline to parse CSVs with multiple tables in the same file, and to transpose CSVs that can\\'t be parsed row-wise.\\n'\n        },\n        emailAddress: {\n          type: 'string',\n          description: 'Email address automatically created by bem. You can forward emails with or without attachments, to be transformed.\\n'\n        },\n        independentDocumentProcessingEnabled: {\n          type: 'boolean',\n          description: 'Whether independent transformations is enabled. For PDFs sent through the pipeline, this enables independent transformations for each individual page. For CSVs, this enables transforming chunks of rows in the CSV.\\n'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of pipeline'\n        },\n        outputSchema: {\n          type: 'object',\n          description: 'Desired output structure defined in standard JSON Schema convention.'\n        },\n        outputSchemaName: {\n          type: 'string',\n          description: 'Name of output schema object.'\n        },\n        pipelineID: {\n          type: 'string',\n          description: 'The unique identifier of the pipeline.'\n        },\n        actionConfig: {\n          $ref: '#/$defs/action_type_config'\n        },\n        webhookEnabled: {\n          type: 'boolean',\n          description: 'DEPRECATED - use subscriptions for webhook events. Whether webhook functionality is enabled.'\n        },\n        webhookURL: {\n          type: 'string',\n          description: 'DEPRECATED - use subscriptions for webhook events. URL bem will send webhook requests to if webhooks are enabled for the pipeline.'\n        }\n      },\n      required: [        'complexTabularTransformEnabled',\n        'emailAddress',\n        'independentDocumentProcessingEnabled',\n        'name',\n        'outputSchema',\n        'outputSchemaName',\n        'pipelineID'\n      ]\n    },\n    action_type_config: {\n      anyOf: [        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ],\n          description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        }\n      ],\n      description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n    },\n    action_type_config_base: {\n      type: 'object',\n      properties: {\n        actionTypeConfigID: {\n          type: 'string',\n          description: 'Unique identifier of action type config.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of action type config.'\n        }\n      },\n      required: [        'actionTypeConfigID',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      endingBefore: {
        type: 'string',
        description:
          'A cursor to use in pagination. `endingBefore` is a pipeline ID that defines your place in the list. For example, if you make a list request and receive 50 objects, starting with `pl_2c9AXIj48cUYJtCuv1gsQtHGDzK`, your subsequent call can include `endingBefore=pl_2c9AXIj48cUYJtCuv1gsQtHGDzK` to fetch the previous page of the list.\n',
      },
      limit: {
        type: 'integer',
      },
      startingAfter: {
        type: 'string',
        description:
          'A cursor to use in pagination. `startingAfter` is a pipeline ID that defines your place in the list. For example, if you make a list request and receive 50 objects, ending with `pl_2c9AXIj48cUYJtCuv1gsQtHGDzK`, your subsequent call can include `startingAfter=pl_2c9AXIj48cUYJtCuv1gsQtHGDzK` to fetch the next page of the list.\n',
      },
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pipelines.list(body)));
};

export default { metadata, tool, handler };
