// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1-beta/pipelines/{pipelineID}',
  operationId: 'deletePipeline',
};

export const tool: Tool = {
  name: 'delete_pipelines',
  description:
    "Deletes an existing pipeline and all related transformations.\n\n**IMPORTANT NOTE:** be sure you have exported any relevant transformations produced by the pipeline before deleting given they won't be accessible through our API after deleting the pipeline.\n",
  inputSchema: {
    type: 'object',
    properties: {
      pipelineID: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const { pipelineID, ...body } = args as any;
  return client.pipelines.delete(pipelineID);
};

export default { metadata, tool, handler };
