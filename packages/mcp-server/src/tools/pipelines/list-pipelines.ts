// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Retrieves configurations for all existing pipelines.',
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
    },
  },
};

export const handler = (client: BemSDK, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.pipelines.list(body);
};

export default { metadata, tool, handler };
