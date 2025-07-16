// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'bem-ai-mcp/filtering';
import { Metadata, asTextContentResult } from 'bem-ai-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'action_type_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1-alpha/action-type-configs/{actionTypeConfigID}',
  operationId: 'updateActionTypeConfig',
};

export const tool: Tool = {
  name: 'update_action_type_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an Action Type Config\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/action_type_config',\n  $defs: {\n    action_type_config: {\n      anyOf: [        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ],\n          description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        },\n        {\n          allOf: [            {\n              $ref: '#/$defs/action_type_config_base'\n            }\n          ]\n        }\n      ],\n      description: 'Configuration of router that maps names of routes to respective pipelines to route to.'\n    },\n    action_type_config_base: {\n      type: 'object',\n      properties: {\n        actionTypeConfigID: {\n          type: 'string',\n          description: 'Unique identifier of action type config.'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of action type config.'\n        }\n      },\n      required: [        'actionTypeConfigID',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          actionTypeConfigID: {
            type: 'string',
          },
          complexTabularTransformEnabled: {
            type: 'boolean',
            description:
              "Whether complex tabular transforms are enabled on the pipeline. This enables the pipeline to parse CSVs with multiple tables in the same file, and to transpose CSVs that can't be parsed row-wise.\n",
          },
          independentDocumentProcessingEnabled: {
            type: 'boolean',
            description:
              'Whether independent transformations is enabled. For PDFs sent through the pipeline, this enables independent transformations for each individual page. For CSVs, this enables transforming chunks of rows in the CSV.\n',
          },
          name: {
            type: 'string',
          },
          nextActionTypeConfigID: {
            type: 'string',
            description:
              'Unique identifier of action type config to run after transformation. Currently only email is supported.',
          },
          outputSchema: {
            type: 'object',
            description: 'Desired output structure defined in standard JSON Schema convention.',
          },
          outputSchemaName: {
            type: 'string',
            description: 'Name of output schema object.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          actionTypeConfigID: {
            type: 'string',
          },
          description: {
            type: 'string',
            description:
              "Description of router. Can be used to provide additional context on router's purpose and expected inputs.",
          },
          name: {
            type: 'string',
          },
          routes: {
            type: 'array',
            description: 'List of routes.',
            items: {
              $ref: '#/$defs/route_list_item',
            },
          },
        },
      },
      {
        type: 'object',
        properties: {
          actionTypeConfigID: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          printPageSplitConfig: {
            type: 'object',
            properties: {
              nextActionTypeConfigID: {
                type: 'string',
                description:
                  'The unique ID of the action type configuration you want to use for this action.',
              },
            },
            required: [],
          },
          semanticPageSplitConfig: {
            type: 'object',
            properties: {
              itemClasses: {
                type: 'array',
                items: {
                  $ref: '#/$defs/split_config_semantic_page_item_class',
                },
              },
            },
            required: [],
          },
          splitType: {
            type: 'string',
          },
        },
      },
      {
        type: 'object',
        properties: {
          actionTypeConfigID: {
            type: 'string',
          },
          joinType: {
            type: 'string',
            description: 'The type of join to perform.',
            enum: ['standard'],
          },
          name: {
            type: 'string',
          },
          nextActionTypeConfigID: {
            type: 'string',
            description: 'Unique identifier of action type config to run after join.',
          },
          outputSchema: {
            type: 'object',
            description: 'Desired output structure defined in standard JSON Schema convention.',
          },
          outputSchemaName: {
            type: 'string',
            description: 'Name of output schema object.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          actionTypeConfigID: {
            type: 'string',
          },
          body: {
            type: 'string',
            description:
              'Body of the email. This can be HTML, and include template variables in the form of `{{template_variable}}`. Template variables are taken from the output of the transformation.\n',
          },
          fromEmail: {
            type: 'string',
            description: 'Email address to send the email from.',
          },
          fromName: {
            type: 'string',
            description: 'Name of the sender.',
          },
          name: {
            type: 'string',
          },
          subject: {
            type: 'string',
            description:
              'Subject of the email. This can include template variables in the form of `{{template_variable}}`. Template variables are taken from the output of the transformation.\n',
          },
          toEmail: {
            type: 'string',
            description: 'Email address to send the email to.',
          },
          toName: {
            type: 'string',
            description: 'Name of the recipient.',
          },
        },
      },
    ],
    $defs: {
      route_list_item: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description:
              'Name of route. Should indicate what the input type or intent is to appropriately analyze input.',
          },
          actionTypeConfigID: {
            type: 'string',
            description:
              'ID of action type config to run after routing. Currently only Transform Configs are supported.',
          },
          description: {
            type: 'string',
            description:
              "Description of route. Can be used to provide additional context on route's purpose.",
          },
          origin: {
            type: 'object',
            description: 'The origin of the route.',
            properties: {
              email: {
                type: 'object',
                properties: {
                  patterns: {
                    type: 'array',
                    description:
                      'Regular expression to match against the email address, using the Go (RE2) regex syntax.',
                    items: {
                      type: 'string',
                    },
                  },
                },
                required: [],
              },
            },
            required: [],
          },
          regex: {
            type: 'object',
            description: 'Regex to match against the input.',
            properties: {
              patterns: {
                type: 'array',
                description:
                  'Regular expression to match against the input, using the Go (RE2) regex syntax.',
                items: {
                  type: 'string',
                },
              },
            },
            required: [],
          },
        },
        required: ['name'],
      },
      split_config_semantic_page_item_class: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          nextActionTypeConfigID: {
            type: 'string',
            description: 'The unique ID of the action type configuration you want to use for this action.',
          },
        },
        required: ['name'],
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
};

export const handler = async (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { actionTypeConfigID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.actionTypeConfigs.update(actionTypeConfigID, body)),
  );
};

export default { metadata, tool, handler };
