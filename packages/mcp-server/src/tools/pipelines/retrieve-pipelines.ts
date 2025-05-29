// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import BemSDK from 'bem-ai';

export const metadata: Metadata = {
  resource: 'pipelines',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1-beta/pipelines/{pipelineID}',
  operationId: 'getPipeline',
};

export const tool: Tool = {
  name: 'retrieve_pipelines',
  description: 'Retrieves configuration of an existing pipeline.',
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
  return client.pipelines.retrieve(pipelineID);
};

export default { metadata, tool, handler };
