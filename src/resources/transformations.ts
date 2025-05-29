// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransformationsAPI from './transformations';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class Transformations extends APIResource {
  /**
   * Creates a batch of new transformations, each with a content and input type, and
   * queues them up in bem's servers. Bem supports both `application/json` and
   * `multipart/form-data` requests, where the latter is useful for large files.
   *
   * @example
   * ```ts
   * const transformation = await client.transformations.create({
   *   pipelineID: 'pl_2c9AXIj48cUYJtCuv1gsQtHGDzK',
   *   transformations: [
   *     {
   *       inputContent: 'U3RhaW5sZXNzIHJvY2tz',
   *       inputType: 'email',
   *       referenceID: 'referenceID',
   *     },
   *   ],
   * });
   * ```
   */
  create(
    body: TransformationCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransformationCreateResponse> {
    return this._client.post(
      '/v1-beta/transformations',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Updates a transformation with feedback on the corrected transformation value.
   *
   * @example
   * ```ts
   * const updateTransformationResponse =
   *   await client.transformations.update();
   * ```
   */
  update(
    body: TransformationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UpdateTransformationResponse> {
    return this._client.put('/v1-beta/transformations', { body, ...options });
  }

  /**
   * Lists all performed transformations, with either pagination or specific
   * reference IDs.
   *
   * @example
   * ```ts
   * const transformations = await client.transformations.list();
   * ```
   */
  list(
    query: TransformationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransformationListResponse> {
    return this._client.get('/v1-beta/transformations', { query, ...options });
  }

  /**
   * Deletes transformations by specifying pipeline ID, list of reference IDs, or
   * list of transformation IDs. Will delete intersection of all params specified.
   *
   * @example
   * ```ts
   * const transformation =
   *   await client.transformations.delete();
   * ```
   */
  delete(
    params: TransformationDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransformationDeleteResponse> {
    const { pipelineID, referenceIDs, transformationIDs } = params ?? {};
    return this._client.delete('/v1-beta/transformations', {
      query: { pipelineID, referenceIDs, transformationIDs },
      ...options,
    });
  }

  /**
   * Deprecating will be replaced by put. Updates a transformation with feedback on
   * the corrected transformation value.
   *
   * @deprecated
   */
  deprecatedUpdate(
    body: TransformationDeprecatedUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UpdateTransformationResponse> {
    return this._client.patch('/v1-beta/transformations', { body, ...options });
  }

  /**
   * Lists all errors encountered while attempting to transform data, with either
   * pagination or specific reference IDs.
   *
   * @example
   * ```ts
   * const response = await client.transformations.listErrors({
   *   referenceIDs: ['string'],
   * });
   * ```
   */
  listErrors(
    query: TransformationListErrorsParams,
    options?: RequestOptions,
  ): APIPromise<TransformationListErrorsResponse> {
    return this._client.get('/v1-beta/transformations/errors', { query, ...options });
  }
}

export type AnyType = unknown | Array<unknown> | string | number | boolean;

/**
 * The input type of the content you're sending for transformation.
 */
export type InputType =
  | 'email'
  | 'pdf'
  | 'xlsx'
  | 'xls'
  | 'docx'
  | 'csv'
  | 'text'
  | 'json'
  | 'png'
  | 'jpeg'
  | 'heic'
  | 'heif'
  | 'webp'
  | 'html'
  | 'wav'
  | 'mp3'
  | 'm4a';

/**
 * Update a batch of new transformations, each with a content and input type, and
 * queues them up in bem's servers.
 */
export interface UpdateTransformation {
  /**
   * An array of objects containing all the transformations you want to patch.
   */
  transformations?: Array<UpdateTransformation.Transformation>;
}

export namespace UpdateTransformation {
  export interface Transformation {
    /**
     * The object with properties of the transformation that you want updated.
     */
    correctedJSON?: unknown | null;

    /**
     * True if order in the array matters. Default is false.
     */
    orderMatching?: boolean | null;

    /**
     * The unique ID you use internally to refer to a transform.
     */
    transformationID?: string;
  }
}

export interface UpdateTransformationResponse {
  /**
   * An array of objects containing all the transformations you want to patch.
   */
  results?: Array<UpdateTransformationResponse.Result>;

  successCount?: number;

  totalCount?: number;
}

export namespace UpdateTransformationResponse {
  export interface Result {
    /**
     * error message
     */
    error?: string | null;

    success?: boolean;

    /**
     * The unique ID you use internally to refer to a transform.
     */
    transformationID?: string;
  }
}

export interface TransformationCreateResponse {
  /**
   * An array of transformations that have been created or de-duplicated by
   * reference.
   */
  transformations?: Array<TransformationCreateResponse.Transformation>;
}

export namespace TransformationCreateResponse {
  export interface Transformation {
    /**
     * The unique ID you use internally to refer to this data point.
     */
    referenceID?: string;

    /**
     * Whether the task is a newly created task or a duplicate task.
     */
    task_create_status?: string;

    /**
     * Task ID generated by bem to track the status of this transformation request
     * using the tasks API.
     */
    taskID?: string;
  }
}

export interface TransformationListResponse {
  /**
   * The total number of results available.
   */
  totalCount?: number;

  /**
   * An array of objects containing the transformations.
   */
  transformations?: Array<TransformationListResponse.Transformation>;
}

export namespace TransformationListResponse {
  export interface Transformation {
    /**
     * Timestamp indicating when the transformation was created.
     */
    createdAt: string;

    /**
     * The input type of the content you're sending for transformation.
     */
    inputType: TransformationsAPI.InputType;

    /**
     * For CSV transformations, this offset represents starting row of the CSV for
     * which you want to fetch transformations for. For PDF transformations, this
     * offset represents the starting page of the PDF that the transformation pertains
     * to. For pipelines that have `independentDocumentProcessingEnabled` set to
     * `true`. Note that this is zero-indexed.
     */
    itemOffset: number;

    /**
     * ID of pipeline that transformed the original input data.
     */
    pipelineID: string;

    /**
     * The unique ID you use internally to refer to this data point.
     */
    referenceID: string;

    /**
     * Unique ID generated by bem following Segment's KSUID conventions.
     */
    transformationID: string;

    /**
     * The transformed content as an object, in the schema defined by the pipeline.
     */
    transformedContent: Transformation.Output | unknown | Array<unknown> | string | number | boolean;

    /**
     * Highlights any fields missing from transforming the original input data that are
     * marked as `required` in the respective output schema for the pipeline.
     */
    invalidProperties?: Array<string>;

    /**
     * Last timestamp indicating when the transform was published via webhook and
     * received a non-200 response. Set to `null` if on a subsequent retry if the
     * webhook service receives a 200 response.
     */
    lastPublishErrorAt?: string | null;

    /**
     * Timestamp indicating when the transform was published via webhook and received a
     * successful 200 response. Value is `null` if the transformation hasn't been sent.
     */
    publishedAt?: string;
  }

  export namespace Transformation {
    /**
     * Transformations are packaged into an array of items with the type of the output
     * schema when `independentDocumentProcessingEnabled` is set to `true.
     */
    export interface Output {
      output?: Array<TransformationsAPI.AnyType | null>;
    }
  }
}

export interface TransformationDeleteResponse {
  /**
   * count of transformations successfully deleted.
   */
  deleteCount?: number;
}

export interface TransformationListErrorsResponse {
  /**
   * The total number of results available.
   */
  totalCount?: number;

  /**
   * An array of objects containing the transformation errors.
   */
  transformationErrors?: Array<TransformationListErrorsResponse.TransformationError>;
}

export namespace TransformationListErrorsResponse {
  export interface TransformationError {
    /**
     * Message describing the error encountered while attempting to transform the
     * original input data.
     */
    message: string;

    /**
     * ID of pipeline that was used to attempt to transform the original input data.
     */
    pipelineID: string;

    /**
     * The unique ID you use internally to refer to this data point.
     */
    referenceID: string;

    /**
     * Timestamp indicating when the transformation was created.
     */
    timestamp: string;

    /**
     * Unique ID of this error generated by bem following Segment's KSUID conventions.
     */
    transformationErrorID: string;
  }
}

export interface TransformationCreateParams {
  /**
   * ID of the desired pipeline to transform the input content. Generated by bem.
   */
  pipelineID: string;

  /**
   * An array of objects containing all the transformations you want to create.
   */
  transformations: Array<TransformationCreateParams.Transformation>;
}

export namespace TransformationCreateParams {
  export interface Transformation {
    /**
     * The file content you want to transform as a base64 URL-encoded string. If the
     * `inputType` is `email`, this is equivalent to the raw format returned by the
     * Gmail API.
     */
    inputContent: string;

    /**
     * The input type of the content you're sending for transformation.
     */
    inputType: TransformationsAPI.InputType;

    /**
     * The unique ID you use internally to refer to this data point. Upon successful
     * transformation, we will return it to you with the transformed content, so you
     * can associate inputs and outputs.
     */
    referenceID: string;
  }
}

export interface TransformationUpdateParams {
  /**
   * An array of objects containing all the transformations you want to patch.
   */
  transformations?: Array<TransformationUpdateParams.Transformation>;
}

export namespace TransformationUpdateParams {
  export interface Transformation {
    /**
     * The object with properties of the transformation that you want updated.
     */
    correctedJSON?: unknown | null;

    /**
     * True if order in the array matters. Default is false.
     */
    orderMatching?: boolean | null;

    /**
     * The unique ID you use internally to refer to a transform.
     */
    transformationID?: string;
  }
}

export interface TransformationListParams {
  /**
   * A cursor to use in pagination. `endingBefore` is a transform ID that defines
   * your place in the list. For example, if you make a list request and receive 50
   * objects, starting with `tr_2bxoJPNdSD4LgRT4YVC4gt72hlI`, your subsequent call
   * can include `endingBefore=tr_2bxoJPNdSD4LgRT4YVC4gt72hlI` to fetch the previous
   * page of the list.
   */
  endingBefore?: string;

  /**
   * Filters based on the index of the page of the document you had transformed. For
   * CSV transformations, this offset represents starting row of the CSV for which
   * you want to fetch transformations for. For PDF transformations, this offset
   * represents the starting page of the PDF. This applies for a specific reference
   * ID of a transformation. Note that this only applies if you specify one reference
   * ID in `referenceIDs` and if you have `independentDocumentProcessingEnabled` set
   * to `true` in your pipeline configuration. Note that this is zero-indexed.
   */
  itemOffset?: number;

  /**
   * This specifies a limit on the number of objects to return, ranging between 1
   * and 100.
   */
  limit?: number;

  /**
   * The unique ID for a given pipeline. Will filter to just the transformations
   * processed by the given pipeline. If left out, will query over ALL
   * transformations for your account.
   */
  pipelineID?: string;

  /**
   * Boolean that toggles filtering whether or not transformations were successfully
   * published via webhook.
   */
  published?: boolean;

  /**
   * Filters to transformations successfully published via webhook after the
   * specified date. Must be in RFC 3339 format.
   */
  publishedAfter?: string;

  /**
   * Filters to transformations successfully published via webhook before the
   * specified date. Must be in RFC 3339 format.
   */
  publishedBefore?: string;

  /**
   * Array with the reference IDs of the transformed data points. Formatted as a CSV
   * array.
   */
  referenceIDs?: Array<string>;

  /**
   * Specifies sorting behavior. The two options are `asc` and `desc` to sort
   * ascending and descending respectively, with default sort being ascending. Paging
   * works in both directions.
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * A cursor to use in pagination. `startingAfter` is a transform ID that defines
   * your place in the list. For example, if you make a list request and receive 50
   * objects, ending with `tr_2bxoJPNdSD4LgRT4YVC4gt72hlI`, your subsequent call can
   * include `startingAfter=tr_2bxoJPNdSD4LgRT4YVC4gt72hlI` to fetch the next page of
   * the list.
   */
  startingAfter?: string;

  /**
   * Array with the transform IDs of the transformed data points. Formatted as a CSV
   * array.
   */
  transformationIDs?: Array<string>;
}

export interface TransformationDeleteParams {
  /**
   * The unique ID for a given pipeline. Will filter to just the transformations
   * processed by the given pipeline. If left out, will query over ALL
   * transformations for your account.
   */
  pipelineID?: string;

  /**
   * Array with the reference IDs of the transformed data points. Formatted as a CSV
   * array.
   */
  referenceIDs?: Array<string>;

  /**
   * Array with the transform IDs of the transformed data points. Formatted as a CSV
   * array.
   */
  transformationIDs?: Array<string>;
}

export interface TransformationDeprecatedUpdateParams {
  /**
   * An array of objects containing all the transformations you want to patch.
   */
  transformations?: Array<TransformationDeprecatedUpdateParams.Transformation>;
}

export namespace TransformationDeprecatedUpdateParams {
  export interface Transformation {
    /**
     * The object with properties of the transformation that you want updated.
     */
    correctedJSON?: unknown | null;

    /**
     * True if order in the array matters. Default is false.
     */
    orderMatching?: boolean | null;

    /**
     * The unique ID you use internally to refer to a transform.
     */
    transformationID?: string;
  }
}

export interface TransformationListErrorsParams {
  /**
   * Array with the reference IDs of the transformed data points. Formatted as a CSV
   * array.
   */
  referenceIDs: Array<string>;

  /**
   * A cursor to use in pagination. `endingBefore` is a transform ID that defines
   * your place in the list. For example, if you make a list request and receive 50
   * objects, starting with `tr_2bxoJPNdSD4LgRT4YVC4gt72hlI`, your subsequent call
   * can include `endingBefore=tr_2bxoJPNdSD4LgRT4YVC4gt72hlI` to fetch the previous
   * page of the list.
   */
  endingBefore?: string;

  /**
   * This specifies a limit on the number of objects to return, ranging between 1
   * and 100.
   */
  limit?: number;

  /**
   * The unique ID for a given pipeline. Will filter to just the transformations
   * processed by the given pipeline. If left out, will query over ALL
   * transformations for your account.
   */
  pipelineID?: string;

  /**
   * Specifies sorting behavior. The two options are `asc` and `desc` to sort
   * ascending and descending respectively, with default sort being ascending. Paging
   * works in both directions.
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * A cursor to use in pagination. `startingAfter` is a transform ID that defines
   * your place in the list. For example, if you make a list request and receive 50
   * objects, ending with `tr_2bxoJPNdSD4LgRT4YVC4gt72hlI`, your subsequent call can
   * include `startingAfter=tr_2bxoJPNdSD4LgRT4YVC4gt72hlI` to fetch the next page of
   * the list.
   */
  startingAfter?: string;
}

export declare namespace Transformations {
  export {
    type AnyType as AnyType,
    type InputType as InputType,
    type UpdateTransformation as UpdateTransformation,
    type UpdateTransformationResponse as UpdateTransformationResponse,
    type TransformationCreateResponse as TransformationCreateResponse,
    type TransformationListResponse as TransformationListResponse,
    type TransformationDeleteResponse as TransformationDeleteResponse,
    type TransformationListErrorsResponse as TransformationListErrorsResponse,
    type TransformationCreateParams as TransformationCreateParams,
    type TransformationUpdateParams as TransformationUpdateParams,
    type TransformationListParams as TransformationListParams,
    type TransformationDeleteParams as TransformationDeleteParams,
    type TransformationDeprecatedUpdateParams as TransformationDeprecatedUpdateParams,
    type TransformationListErrorsParams as TransformationListErrorsParams,
  };
}
