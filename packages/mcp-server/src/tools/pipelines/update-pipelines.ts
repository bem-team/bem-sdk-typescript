// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1-beta/pipelines/{pipelineID}',
  operationId: 'updatePipeline',
};

export const tool: Tool = {
  name: 'update_pipelines',
  description:
    'Updates an existing pipeline. Follow conventional PATCH behavior, so only included fields will be updated.\n',
  inputSchema: {
    type: 'object',
    properties: {
      pipelineID: {
        type: 'string',
      },
      actionConfig: {
        $ref: '#/$defs/action_type_config',
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
        description: 'Name of pipeline',
      },
      outputSchema: {
        type: 'object',
        description:
          'Desired output structure defined in standard JSON Schema convention. Note - We DO NOT support non-alphanumeric characters in names of fields.',
      },
      outputSchemaName: {
        type: 'string',
        description: 'Name of output schema object.',
      },
      webhookEnabled: {
        type: 'boolean',
        description:
          'DEPRECATED - use subscriptions for webhook events. Whether webhook functionality is enabled.',
      },
      webhookURL: {
        type: 'string',
        description:
          'DEPRECATED - use subscriptions for webhook events. URL bem will send webhook requests to with successful transformation outputs if webhooks are enabled for the pipeline.',
      },
    },
    $defs: {
      action_type_config: {
        anyOf: [
          {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_base',
              },
            ],
          },
          {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_base',
              },
            ],
            description:
              'Configuration of router that maps names of routes to respective pipelines to route to.',
          },
          {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_base',
              },
            ],
          },
          {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_base',
              },
            ],
          },
          {
            allOf: [
              {
                $ref: '#/$defs/action_type_config_base',
              },
            ],
          },
        ],
        description: 'Configuration of router that maps names of routes to respective pipelines to route to.',
      },
      action_type_config_base: {
        type: 'object',
        properties: {
          actionTypeConfigID: {
            type: 'string',
            description: 'Unique identifier of action type config.',
          },
          name: {
            type: 'string',
            description: 'Name of action type config.',
          },
        },
        required: ['actionTypeConfigID', 'name'],
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { pipelineID, ...body } = args as any;
  return client.pipelines.update(pipelineID, body);
};

export default { metadata, tool, handler };
