// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Update an Action Type Config',
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
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { actionTypeConfigID, ...body } = args as any;
  return client.actionTypeConfigs.update(actionTypeConfigID, body);
};

export default { metadata, tool, handler };
