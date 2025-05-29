// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ActionsAPI from './actions';
import * as ActionTypeConfigsAPI from './action-type-configs';
import * as TransformationsAPI from './transformations';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';

export class Actions extends APIResource {
  /**
   * Create a batch of Actions
   */
  create(body: ActionCreateParams, options?: RequestOptions): APIPromise<GetActionsResponse> {
    return this._client.post(
      '/v1-alpha/actions',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * List Actions
   */
  list(
    query: ActionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GetActionsResponse> {
    return this._client.get('/v1-alpha/actions', { query, ...options });
  }

  /**
   * Updates a route event with feedback on the desired router choices.
   */
  correctRoute(body: ActionCorrectRouteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/v1-alpha/actions/route', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActionBase {
  actionID: string;

  actionTypeConfigID: string;

  referenceID: string;

  /**
   * The status of the action.
   */
  status: 'pending' | 'running' | 'completed' | 'failed';
}

export interface ActionCreateBase {
  /**
   * The type of the action.
   */
  actionType: ActionTypeConfigsAPI.ActionType;

  actionTypeConfigID: string;
}

export interface CreateActionBase {
  referenceID: string;
}

export interface EmailActionBase {
  /**
   * Template variables to be used in the email body and subject. Templates are
   * injected into the email body and subject as `{{template_variable}}`.
   */
  templateVariables: unknown;
}

export interface GetActionsResponse {
  actions?: Array<
    | GetActionsResponse.TransformAction
    | GetActionsResponse.RouteAction
    | GetActionsResponse.SplitAction
    | GetActionsResponse.JoinAction
    | GetActionsResponse.EmailAction
  >;
}

export namespace GetActionsResponse {
  export interface TransformAction extends ActionsAPI.ActionBase, ActionsAPI.TransformActionBase {
    actionType: 'transform';
  }

  export interface RouteAction extends ActionsAPI.ActionBase, ActionsAPI.RouteActionBase {
    actionType: 'route';
  }

  export interface SplitAction extends ActionsAPI.ActionBase, ActionsAPI.SplitActionBase {
    actionType: 'split';
  }

  export interface JoinAction extends ActionsAPI.ActionBase, ActionsAPI.JoinActionBase {
    actionType: 'join';
  }

  export interface EmailAction extends ActionsAPI.ActionBase, ActionsAPI.EmailActionBase {
    actionType: 'email';
  }
}

export interface JoinActionBase {
  inputs: Array<JoinActionBase.Input>;

  joinType: 'standard';
}

export namespace JoinActionBase {
  export interface Input {
    /**
     * The file content you want to transform as a base64 encoded string. If the
     * `inputType` is `email`, this is equivalent to the raw format returned by the
     * Gmail API.
     */
    inputContent: string;

    /**
     * The input type of the content you're sending for transformation.
     */
    inputType: TransformationsAPI.InputType;

    /**
     * The unique ID you use internally to refer to this data point.
     */
    itemReferenceID?: string;
  }
}

export interface RouteActionBase {
  /**
   * The file content you want to route as a base64 encoded string. If the
   * `inputType` is `email`, this is equivalent to the raw format returned by the
   * Gmail API.
   */
  inputContent: string;

  /**
   * The input type of the content you're sending for transformation.
   */
  inputType: TransformationsAPI.InputType;
}

export interface SplitActionBase {
  /**
   * The file content you want to split as a base64 encoded string. If the
   * `inputType` is `email`, this is equivalent to the raw format returned by the
   * Gmail API.
   */
  inputContent: string;

  /**
   * The input type of the content you're sending for transformation.
   */
  inputType: TransformationsAPI.InputType;
}

export interface TransformActionBase {
  /**
   * The file content you want to transform as a base64 encoded string. If the
   * `inputType` is `email`, this is equivalent to the raw format returned by the
   * Gmail API.
   */
  inputContent: string;

  /**
   * The input type of the content you're sending for transformation.
   */
  inputType: TransformationsAPI.InputType;
}

export type ActionCreateParams =
  | ActionCreateParams.CreateTransformActions
  | ActionCreateParams.CreateRouteActions
  | ActionCreateParams.CreateSplitActions
  | ActionCreateParams.CreateJoinActions
  | ActionCreateParams.CreateEmailActions;

export declare namespace ActionCreateParams {
  export interface CreateTransformActions {
    actions: Array<CreateTransformActions.Action>;

    /**
     * The type of the action.
     */
    actionType: ActionTypeConfigsAPI.ActionType;

    actionTypeConfigID: string;
  }

  export namespace CreateTransformActions {
    export interface Action extends ActionsAPI.CreateActionBase, ActionsAPI.TransformActionBase {}
  }

  export interface CreateRouteActions {
    actions: Array<CreateRouteActions.Action>;

    /**
     * The type of the action.
     */
    actionType: ActionTypeConfigsAPI.ActionType;

    actionTypeConfigID: string;
  }

  export namespace CreateRouteActions {
    export interface Action extends ActionsAPI.CreateActionBase, ActionsAPI.RouteActionBase {}
  }

  export interface CreateSplitActions {
    actions: Array<CreateSplitActions.Action>;

    /**
     * The type of the action.
     */
    actionType: ActionTypeConfigsAPI.ActionType;

    actionTypeConfigID: string;
  }

  export namespace CreateSplitActions {
    export interface Action extends ActionsAPI.CreateActionBase, ActionsAPI.SplitActionBase {}
  }

  export interface CreateJoinActions {
    actions: Array<CreateJoinActions.Action>;

    /**
     * The type of the action.
     */
    actionType: ActionTypeConfigsAPI.ActionType;

    actionTypeConfigID: string;
  }

  export namespace CreateJoinActions {
    export interface Action extends ActionsAPI.CreateActionBase, ActionsAPI.JoinActionBase {}
  }

  export interface CreateEmailActions {
    /**
     * The type of the action.
     */
    actionType: ActionTypeConfigsAPI.ActionType;

    actionTypeConfigID: string;

    actions?: Array<CreateEmailActions.Action>;
  }

  export namespace CreateEmailActions {
    export interface Action extends ActionsAPI.CreateActionBase, ActionsAPI.EmailActionBase {}
  }
}

export interface ActionListParams {
  actionIDs?: Array<string>;

  /**
   * The type of the action.
   */
  actionType?: ActionTypeConfigsAPI.ActionType;

  actionTypeConfigIDs?: Array<string>;

  /**
   * A cursor to use in pagination. `endingBefore` is an action ID that defines your
   * place in the list.
   */
  endingBefore?: string;

  limit?: number;

  /**
   * Specifies sorting behavior. The two options are `asc` and `desc` to sort
   * ascending and descending respectively, with default sort being ascending. Paging
   * works in both directions.
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * A cursor to use in pagination. `startingAfter` is an action ID that defines your
   * place in the list.
   */
  startingAfter?: string;
}

export interface ActionCorrectRouteParams {
  /**
   * An array of objects containing all the route actions you want to submit feedback
   * for.
   */
  routeActions?: Array<ActionCorrectRouteParams.RouteAction>;
}

export namespace ActionCorrectRouteParams {
  export interface RouteAction {
    /**
     * The action ID of the relevant route action.
     */
    actionID?: string;

    /**
     * The desired route that should have been chosen.
     */
    correctedChoice?: string;
  }
}

export declare namespace Actions {
  export {
    type ActionBase as ActionBase,
    type ActionCreateBase as ActionCreateBase,
    type CreateActionBase as CreateActionBase,
    type EmailActionBase as EmailActionBase,
    type GetActionsResponse as GetActionsResponse,
    type JoinActionBase as JoinActionBase,
    type RouteActionBase as RouteActionBase,
    type SplitActionBase as SplitActionBase,
    type TransformActionBase as TransformActionBase,
    type ActionCreateParams as ActionCreateParams,
    type ActionListParams as ActionListParams,
    type ActionCorrectRouteParams as ActionCorrectRouteParams,
  };
}
