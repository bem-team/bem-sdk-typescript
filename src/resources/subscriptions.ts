// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Creates a new subscription to listen to transform or error events.
   *
   * @example
   * ```ts
   * const subscription = await client.subscriptions.create({
   *   actionTypeConfigID: 'actionTypeConfigID',
   *   name: 'name',
   *   type: 'transform',
   * });
   * ```
   */
  create(body: SubscriptionCreateParams, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.post('/v1-alpha/subscriptions', { body, ...options });
  }

  /**
   * Get a Subscription
   *
   * @example
   * ```ts
   * const subscription = await client.subscriptions.retrieve(
   *   'subscriptionID',
   * );
   * ```
   */
  retrieve(subscriptionID: string, options?: RequestOptions): APIPromise<Subscription> {
    return this._client.get(path`/v1-alpha/subscriptions/${subscriptionID}`, options);
  }

  /**
   * Updates an existing subscription. Follow conventional PATCH behavior, so only
   * included fields will be updated.
   *
   * @example
   * ```ts
   * const subscription = await client.subscriptions.update(
   *   'subscriptionID',
   * );
   * ```
   */
  update(
    subscriptionID: string,
    body: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Subscription> {
    return this._client.patch(path`/v1-alpha/subscriptions/${subscriptionID}`, { body, ...options });
  }

  /**
   * List Subscriptions
   *
   * @example
   * ```ts
   * const subscriptions = await client.subscriptions.list();
   * ```
   */
  list(
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    return this._client.get('/v1-alpha/subscriptions', { query, ...options });
  }

  /**
   * Deletes an existing subscription.
   *
   * @example
   * ```ts
   * await client.subscriptions.delete('subscriptionID');
   * ```
   */
  delete(subscriptionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1-alpha/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Subscription {
  /**
   * Name of subscription.
   */
  name: string;

  /**
   * The unique identifier of the subscription.
   */
  subscriptionID: string;

  /**
   * Type of subscription.
   */
  type: 'transform' | 'route' | 'split_collection' | 'split_item' | 'error' | 'join';

  /**
   * Unique identifier of action subscription listens to. Only associated with
   * pipeline IDs at the moment.
   */
  actionTypeConfigID?: string;

  /**
   * Toggles whether subscription is active or not.
   */
  disabled?: boolean;

  /**
   * URL bem will send webhook requests to.
   */
  webhookURL?: string;
}

export type SubscriptionListResponse = Array<Subscription>;

export interface SubscriptionCreateParams {
  /**
   * Unique identifier of action this subscription listens to.
   */
  actionTypeConfigID: string;

  /**
   * Name of subscription.
   */
  name: string;

  /**
   * Type of subscription.
   */
  type: 'transform' | 'route' | 'split_collection' | 'split_item' | 'error' | 'join';

  /**
   * Toggles whether subscription is active or not.
   */
  disabled?: boolean;

  /**
   * URL bem will send webhook requests to.
   */
  webhookURL?: string;
}

export interface SubscriptionUpdateParams {
  /**
   * Unique identifier of action this subscription listens to.
   */
  actionTypeConfigID?: string;

  /**
   * Toggles whether subscription is active or not.
   */
  disabled?: boolean;

  /**
   * Name of subscription.
   */
  name?: string;

  /**
   * Type of subscription.
   */
  type?: 'transform' | 'route' | 'split_collection' | 'split_item' | 'error' | 'join';

  /**
   * URL bem will send webhook requests to.
   */
  webhookURL?: string;
}

export interface SubscriptionListParams {
  /**
   * A cursor to use in pagination. `endingBefore` is a task ID that defines your
   * place in the list. For example, if you make a list request and receive 50
   * objects, starting with `sub_2c9AXIj48cUYJtCuv1gsQtHGDzK`, your subsequent call
   * can include `endingBefore=sub_2c9AXIj48cUYJtCuv1gsQtHGDzK` to fetch the previous
   * page of the list.
   */
  endingBefore?: string;

  /**
   * This specifies a limit on the number of objects to return, ranging between 1
   * and 100.
   */
  limit?: number;

  /**
   * Specifies sorting behavior. The two options are `asc` and `desc` to sort
   * ascending and descending respectively, with default sort being ascending. Paging
   * works in both directions.
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * A cursor to use in pagination. `startingAfter` is a task ID that defines your
   * place in the list. For example, if you make a list request and receive 50
   * objects, ending with `sub_2c9AXIj48cUYJtCuv1gsQtHGDzK`, your subsequent call can
   * include `startingAfter=sub_2c9AXIj48cUYJtCuv1gsQtHGDzK` to fetch the next page
   * of the list.
   */
  startingAfter?: string;
}

export declare namespace Subscriptions {
  export {
    type Subscription as Subscription,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
  };
}
