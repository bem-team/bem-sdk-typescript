// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ActionTypeConfigsAPI from './action-type-configs';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Pipelines extends APIResource {
  /**
   * Creates a new pipeline to transform data, given an output schema. It returns the
   * created pipeline's details. Pipelines are long-lived, so we recommend you create
   * them outside of your application loop and reuse them.
   *
   * @example
   * ```ts
   * const pipeline = await client.pipelines.create({
   *   name: 'Freight Load Pipeline',
   *   outputSchema: {
   *     value: {
   *       type: 'object',
   *       required: ['tenders'],
   *       properties: {
   *         tenders: {
   *           type: 'array',
   *           items: {
   *             type: 'object',
   *             required: [
   *               'loadReference',
   *               'origin',
   *               'destination',
   *               'weightTons',
   *               'loadType',
   *               'desiredDeliveryDate',
   *               'bidSubmissionDeadline',
   *               'submitter',
   *             ],
   *             properties: {
   *               origin: {
   *                 type: 'string',
   *                 description: 'The starting point of the shipment.',
   *               },
   *               loadType: {
   *                 type: 'string',
   *                 description: 'The type of goods being shipped.',
   *               },
   *               submitter: {
   *                 type: 'object',
   *                 required: ['name', 'position', 'contactInfo'],
   *                 properties: {
   *                   name: {
   *                     type: 'string',
   *                     description: 'Name of the person submitting the tender.',
   *                   },
   *                   position: {
   *                     type: 'string',
   *                     description: 'Position of the submitter within their company.',
   *                   },
   *                   contactInfo: {
   *                     type: 'object',
   *                     required: ['email'],
   *                     properties: {
   *                       email: {
   *                         type: 'string',
   *                         format: 'email',
   *                         description: 'Email address of the submitter.',
   *                       },
   *                       phone: {
   *                         type: 'string',
   *                         description: 'Phone number of the submitter.',
   *                       },
   *                     },
   *                   },
   *                 },
   *               },
   *               weightTons: {
   *                 type: 'number',
   *                 description: 'The weight of the load in tons.',
   *               },
   *               destination: {
   *                 type: 'string',
   *                 description: 'The endpoint of the shipment.',
   *               },
   *               loadReference: {
   *                 type: 'string',
   *                 description: 'Unique identifier for the load tender.',
   *               },
   *               desiredDeliveryDate: {
   *                 type: 'string',
   *                 format: 'date',
   *                 description: 'The preferred date for the shipment to be delivered.',
   *               },
   *               bidSubmissionDeadline: {
   *                 type: 'string',
   *                 format: 'date',
   *                 description: 'The deadline for submitting bids.',
   *               },
   *             },
   *           },
   *         },
   *       },
   *     },
   *   },
   * });
   * ```
   */
  create(body: PipelineCreateParams, options?: RequestOptions): APIPromise<Pipeline> {
    return this._client.post('/v1-beta/pipelines', { body, ...options });
  }

  /**
   * Retrieves configuration of an existing pipeline.
   *
   * @example
   * ```ts
   * const pipeline = await client.pipelines.retrieve(
   *   'pipelineID',
   * );
   * ```
   */
  retrieve(pipelineID: string, options?: RequestOptions): APIPromise<PipelineRetrieveResponse> {
    return this._client.get(path`/v1-beta/pipelines/${pipelineID}`, options);
  }

  /**
   * Updates an existing pipeline. Follow conventional PATCH behavior, so only
   * included fields will be updated.
   *
   * @example
   * ```ts
   * const pipeline = await client.pipelines.update(
   *   'pipelineID',
   * );
   * ```
   */
  update(pipelineID: string, body: PipelineUpdateParams, options?: RequestOptions): APIPromise<Pipeline> {
    return this._client.patch(path`/v1-beta/pipelines/${pipelineID}`, { body, ...options });
  }

  /**
   * Retrieves configurations for all existing pipelines.
   *
   * @example
   * ```ts
   * const pipelines = await client.pipelines.list();
   * ```
   */
  list(
    query: PipelineListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PipelineListResponse> {
    return this._client.get('/v1-beta/pipelines', { query, ...options });
  }

  /**
   * Deletes an existing pipeline and all related transformations.
   *
   * **IMPORTANT NOTE:** be sure you have exported any relevant transformations
   * produced by the pipeline before deleting given they won't be accessible through
   * our API after deleting the pipeline.
   *
   * @example
   * ```ts
   * await client.pipelines.delete('pipelineID');
   * ```
   */
  delete(pipelineID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1-beta/pipelines/${pipelineID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Pipeline {
  /**
   * Whether complex tabular transforms are enabled on the pipeline. This enables the
   * pipeline to parse CSVs with multiple tables in the same file, and to transpose
   * CSVs that can't be parsed row-wise.
   */
  complexTabularTransformEnabled: boolean;

  /**
   * Email address automatically created by bem. You can forward emails with or
   * without attachments, to be transformed.
   */
  emailAddress: string;

  /**
   * Whether independent transformations is enabled. For PDFs sent through the
   * pipeline, this enables independent transformations for each individual page. For
   * CSVs, this enables transforming chunks of rows in the CSV.
   */
  independentDocumentProcessingEnabled: boolean;

  /**
   * Name of pipeline
   */
  name: string;

  /**
   * Desired output structure defined in standard JSON Schema convention.
   */
  outputSchema: unknown;

  /**
   * Name of output schema object.
   */
  outputSchemaName: string;

  /**
   * The unique identifier of the pipeline.
   */
  pipelineID: string;

  /**
   * Configuration of router that maps names of routes to respective pipelines to
   * route to.
   */
  actionConfig?: ActionTypeConfigsAPI.ActionTypeConfig;

  /**
   * @deprecated DEPRECATED - use subscriptions for webhook events. Whether webhook
   * functionality is enabled.
   */
  webhookEnabled?: boolean;

  /**
   * @deprecated DEPRECATED - use subscriptions for webhook events. URL bem will send
   * webhook requests to if webhooks are enabled for the pipeline.
   */
  webhookURL?: string;
}

export interface PipelineRetrieveResponse {
  pipeline?: Pipeline;
}

export type PipelineListResponse = Array<Pipeline>;

export interface PipelineCreateParams {
  /**
   * Name of pipeline
   */
  name: string;

  /**
   * Desired output structure defined in standard JSON Schema convention. Note - We
   * DO NOT support non-alphanumeric characters in names of fields.
   */
  outputSchema: unknown;

  /**
   * Configuration of router that maps names of routes to respective pipelines to
   * route to.
   */
  actionConfig?: ActionTypeConfigsAPI.ActionTypeConfig;

  /**
   * Whether complex tabular transforms are enabled on the pipeline. This enables the
   * pipeline to parse CSVs with multiple tables in the same file, and to transpose
   * CSVs that can't be parsed row-wise.
   */
  complexTabularTransformEnabled?: boolean;

  /**
   * Whether independent transformations is enabled. For PDFs sent through the
   * pipeline, this enables independent transformations for each individual page. For
   * CSVs, this enables transforming chunks of rows in the CSV.
   */
  independentDocumentProcessingEnabled?: boolean;

  /**
   * Name of output schema object.
   */
  outputSchemaName?: string;

  /**
   * @deprecated DEPRECATED - use subscriptions for webhook events. Whether webhook
   * functionality is enabled.
   */
  webhookEnabled?: boolean;

  /**
   * @deprecated DEPRECATED - use subscriptions for webhook events. URL bem will send
   * webhook requests to with successful transformation outputs if webhooks are
   * enabled for the pipeline.
   */
  webhookURL?: string;
}

export interface PipelineUpdateParams {
  /**
   * Configuration of router that maps names of routes to respective pipelines to
   * route to.
   */
  actionConfig?: ActionTypeConfigsAPI.ActionTypeConfig;

  /**
   * Whether complex tabular transforms are enabled on the pipeline. This enables the
   * pipeline to parse CSVs with multiple tables in the same file, and to transpose
   * CSVs that can't be parsed row-wise.
   */
  complexTabularTransformEnabled?: boolean;

  /**
   * Whether independent transformations is enabled. For PDFs sent through the
   * pipeline, this enables independent transformations for each individual page. For
   * CSVs, this enables transforming chunks of rows in the CSV.
   */
  independentDocumentProcessingEnabled?: boolean;

  /**
   * Name of pipeline
   */
  name?: string;

  /**
   * Desired output structure defined in standard JSON Schema convention. Note - We
   * DO NOT support non-alphanumeric characters in names of fields.
   */
  outputSchema?: unknown;

  /**
   * Name of output schema object.
   */
  outputSchemaName?: string;

  /**
   * @deprecated DEPRECATED - use subscriptions for webhook events. Whether webhook
   * functionality is enabled.
   */
  webhookEnabled?: boolean;

  /**
   * @deprecated DEPRECATED - use subscriptions for webhook events. URL bem will send
   * webhook requests to with successful transformation outputs if webhooks are
   * enabled for the pipeline.
   */
  webhookURL?: string;
}

export interface PipelineListParams {
  /**
   * A cursor to use in pagination. `endingBefore` is a pipeline ID that defines your
   * place in the list. For example, if you make a list request and receive 50
   * objects, starting with `pl_2c9AXIj48cUYJtCuv1gsQtHGDzK`, your subsequent call
   * can include `endingBefore=pl_2c9AXIj48cUYJtCuv1gsQtHGDzK` to fetch the previous
   * page of the list.
   */
  endingBefore?: string;

  limit?: number;

  /**
   * A cursor to use in pagination. `startingAfter` is a pipeline ID that defines
   * your place in the list. For example, if you make a list request and receive 50
   * objects, ending with `pl_2c9AXIj48cUYJtCuv1gsQtHGDzK`, your subsequent call can
   * include `startingAfter=pl_2c9AXIj48cUYJtCuv1gsQtHGDzK` to fetch the next page of
   * the list.
   */
  startingAfter?: string;
}

export declare namespace Pipelines {
  export {
    type Pipeline as Pipeline,
    type PipelineRetrieveResponse as PipelineRetrieveResponse,
    type PipelineListResponse as PipelineListResponse,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineListParams as PipelineListParams,
  };
}
