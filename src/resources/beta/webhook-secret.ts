// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class WebhookSecretResource extends APIResource {
  /**
   * Generates a new webhook secret to be used for webhook signatures. If a webhook
   * secret already exists, this endpoint will overwrite the previous secret and
   * generate a new one.
   *
   * @example
   * ```ts
   * const webhookSecret =
   *   await client.beta.webhookSecret.create();
   * ```
   */
  create(options?: RequestOptions): APIPromise<WebhookSecret> {
    return this._client.post('/v1-beta/webhook-secret', options);
  }

  /**
   * Gets the current webhook secret for your account.
   *
   * @example
   * ```ts
   * const webhookSecret =
   *   await client.beta.webhookSecret.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<WebhookSecret> {
    return this._client.get('/v1-beta/webhook-secret', options);
  }
}

export interface WebhookSecret {
  /**
   * Webhook secret for your account.
   */
  secret: string;
}

export declare namespace WebhookSecretResource {
  export { type WebhookSecret as WebhookSecret };
}
