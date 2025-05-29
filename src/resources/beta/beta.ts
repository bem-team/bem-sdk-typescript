// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PipelinesAPI from './pipelines';
import {
  Pipeline,
  PipelineCreateParams,
  PipelineListParams,
  PipelineListResponse,
  PipelineRetrieveResponse,
  PipelineUpdateParams,
  Pipelines,
} from './pipelines';
import * as TransformationsAPI from './transformations';
import {
  AnyType,
  InputType,
  TransformationCreateParams,
  TransformationCreateResponse,
  TransformationDeleteParams,
  TransformationDeleteResponse,
  TransformationDeprecatedUpdateParams,
  TransformationListErrorsParams,
  TransformationListErrorsResponse,
  TransformationListParams,
  TransformationListResponse,
  TransformationUpdateParams,
  Transformations,
  UpdateTransformation,
  UpdateTransformationResponse,
} from './transformations';
import * as WebhookSecretAPI from './webhook-secret';
import { WebhookSecret, WebhookSecretResource } from './webhook-secret';

export class Beta extends APIResource {
  pipelines: PipelinesAPI.Pipelines = new PipelinesAPI.Pipelines(this._client);
  transformations: TransformationsAPI.Transformations = new TransformationsAPI.Transformations(this._client);
  webhookSecret: WebhookSecretAPI.WebhookSecretResource = new WebhookSecretAPI.WebhookSecretResource(
    this._client,
  );
}

Beta.Pipelines = Pipelines;
Beta.Transformations = Transformations;
Beta.WebhookSecretResource = WebhookSecretResource;

export declare namespace Beta {
  export {
    Pipelines as Pipelines,
    type Pipeline as Pipeline,
    type PipelineRetrieveResponse as PipelineRetrieveResponse,
    type PipelineListResponse as PipelineListResponse,
    type PipelineCreateParams as PipelineCreateParams,
    type PipelineUpdateParams as PipelineUpdateParams,
    type PipelineListParams as PipelineListParams,
  };

  export {
    Transformations as Transformations,
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

  export { WebhookSecretResource as WebhookSecretResource, type WebhookSecret as WebhookSecret };
}
