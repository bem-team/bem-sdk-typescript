// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ActionTypeConfigsAPI from './action-type-configs';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ActionTypeConfigs extends APIResource {
  /**
   * Create an Action Type Config
   */
  create(params: ActionTypeConfigCreateParams, options?: RequestOptions): APIPromise<ActionTypeConfig> {
    const { body } = params;
    return this._client.post('/v1-alpha/action-type-configs', { body: body, ...options });
  }

  /**
   * Get an Action Type Config
   */
  retrieve(actionTypeConfigID: string, options?: RequestOptions): APIPromise<ActionTypeConfig> {
    return this._client.get(path`/v1-alpha/action-type-configs/${actionTypeConfigID}`, options);
  }

  /**
   * Update an Action Type Config
   *
   * @example
   * ```ts
   * const actionTypeConfig =
   *   await client.actionTypeConfigs.update(
   *     'actionTypeConfigID',
   *   );
   * ```
   */
  update(
    actionTypeConfigID: string,
    body: ActionTypeConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ActionTypeConfig> {
    return this._client.patch(path`/v1-alpha/action-type-configs/${actionTypeConfigID}`, {
      body,
      ...options,
    });
  }

  /**
   * List Action Type Configs
   */
  list(
    query: ActionTypeConfigListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ActionTypeConfigListResponse> {
    return this._client.get('/v1-alpha/action-type-configs', { query, ...options });
  }

  /**
   * Delete an Action Type Config
   */
  delete(actionTypeConfigID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1-alpha/action-type-configs/${actionTypeConfigID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * The type of the action.
 */
export type ActionType = 'transform' | 'route' | 'split' | 'join' | 'email';

/**
 * Configuration of router that maps names of routes to respective pipelines to
 * route to.
 */
export type ActionTypeConfig =
  | ActionTypeConfig.TransformConfig
  | ActionTypeConfig.RouteConfig
  | ActionTypeConfig.SplitConfig
  | ActionTypeConfig.JoinConfig
  | ActionTypeConfig.EmailConfig;

export namespace ActionTypeConfig {
  export interface TransformConfig extends ActionTypeConfigsAPI.ActionTypeConfigBase {
    actionType: 'transform';

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
     * Desired output structure defined in standard JSON Schema convention.
     */
    outputSchema: unknown;

    /**
     * Name of output schema object.
     */
    outputSchemaName: string;

    /**
     * Unique identifier of action type config to run after transformation. Currently
     * only email is supported.
     */
    nextActionTypeConfigID?: string;
  }

  /**
   * Configuration of router that maps names of routes to respective pipelines to
   * route to.
   */
  export interface RouteConfig extends ActionTypeConfigsAPI.ActionTypeConfigBase {
    actionType: 'route';

    /**
     * List of routes.
     */
    routes: Array<ActionTypeConfigsAPI.RouteListItem>;

    /**
     * Description of router. Can be used to provide additional context on router's
     * purpose and expected inputs.
     */
    description?: string;

    /**
     * Email address automatically created by bem. You can forward emails with or
     * without attachments, to be routed.
     */
    emailAddress?: string;
  }

  export interface SplitConfig extends ActionTypeConfigsAPI.ActionTypeConfigBase {
    actionType: 'split';

    splitType: 'print_page' | 'semantic_page';

    printPageSplitConfig?: SplitConfig.PrintPageSplitConfig;

    semanticPageSplitConfig?: SplitConfig.SemanticPageSplitConfig;
  }

  export namespace SplitConfig {
    export interface PrintPageSplitConfig {
      /**
       * The unique ID of the action type configuration you want to use for this action.
       */
      nextActionTypeConfigID?: string;
    }

    export interface SemanticPageSplitConfig {
      itemClasses?: Array<ActionTypeConfigsAPI.SplitConfigSemanticPageItemClass>;
    }
  }

  export interface JoinConfig extends ActionTypeConfigsAPI.ActionTypeConfigBase {
    actionType: 'join';

    /**
     * Desired output structure defined in standard JSON Schema convention.
     */
    outputSchema: unknown;

    /**
     * Name of output schema object.
     */
    outputSchemaName: string;

    /**
     * The type of join to perform.
     */
    joinType?: 'standard';

    /**
     * Unique identifier of action type config to run after join.
     */
    nextActionTypeConfigID?: string;
  }

  export interface EmailConfig extends ActionTypeConfigsAPI.ActionTypeConfigBase {
    actionType: 'email';

    /**
     * Body of the email. This can be HTML, and include template variables in the form
     * of `{{template_variable}}`. Template variables are taken from the output of the
     * transformation.
     */
    body: string;

    /**
     * Email address to send the email from.
     */
    fromEmail: string;

    /**
     * Name of the sender.
     */
    fromName: string;

    /**
     * Subject of the email. This can include template variables in the form of
     * `{{template_variable}}`. Template variables are taken from the output of the
     * transformation.
     */
    subject: string;

    /**
     * Email address to send the email to.
     */
    toEmail: string;

    /**
     * Name of the recipient.
     */
    toName: string;
  }
}

export interface ActionTypeConfigBase {
  /**
   * Unique identifier of action type config.
   */
  actionTypeConfigID: string;

  /**
   * Name of action type config.
   */
  name: string;
}

export interface ActionTypeConfigCreateBase {
  /**
   * The type of the action.
   */
  actionType: ActionType;
}

export interface ActionTypeConfigUpsertBase {
  name?: string;
}

export interface RouteListItem {
  /**
   * Name of route. Should indicate what the input type or intent is to appropriately
   * analyze input.
   */
  name: string;

  /**
   * ID of action type config to run after routing. Currently only Transform Configs
   * are supported.
   */
  actionTypeConfigID?: string;

  /**
   * Description of route. Can be used to provide additional context on route's
   * purpose.
   */
  description?: string;

  /**
   * The origin of the route.
   */
  origin?: RouteListItem.Origin;

  /**
   * Regex to match against the input.
   */
  regex?: RouteListItem.Regex;
}

export namespace RouteListItem {
  /**
   * The origin of the route.
   */
  export interface Origin {
    email?: Origin.Email;
  }

  export namespace Origin {
    export interface Email {
      /**
       * Regular expression to match against the email address, using the Go (RE2) regex
       * syntax.
       */
      patterns?: Array<string>;
    }
  }

  /**
   * Regex to match against the input.
   */
  export interface Regex {
    /**
     * Regular expression to match against the input, using the Go (RE2) regex syntax.
     */
    patterns?: Array<string>;
  }
}

export interface SplitConfigSemanticPageItemClass {
  name: string;

  description?: string;

  /**
   * The unique ID of the action type configuration you want to use for this action.
   */
  nextActionTypeConfigID?: string;
}

export interface UpsertEmailConfig extends ActionTypeConfigUpsertBase {
  /**
   * Body of the email. This can be HTML, and include template variables in the form
   * of `{{template_variable}}`. Template variables are taken from the output of the
   * transformation.
   */
  body?: string;

  /**
   * Email address to send the email from.
   */
  fromEmail?: string;

  /**
   * Name of the sender.
   */
  fromName?: string;

  /**
   * Subject of the email. This can include template variables in the form of
   * `{{template_variable}}`. Template variables are taken from the output of the
   * transformation.
   */
  subject?: string;

  /**
   * Email address to send the email to.
   */
  toEmail?: string;

  /**
   * Name of the recipient.
   */
  toName?: string;
}

export interface UpsertJoinConfig extends ActionTypeConfigUpsertBase {
  /**
   * The type of join to perform.
   */
  joinType?: 'standard';

  /**
   * Unique identifier of action type config to run after join.
   */
  nextActionTypeConfigID?: string;

  /**
   * Desired output structure defined in standard JSON Schema convention.
   */
  outputSchema?: unknown;

  /**
   * Name of output schema object.
   */
  outputSchemaName?: string;
}

export interface UpsertRouteConfig extends ActionTypeConfigUpsertBase {
  /**
   * Description of router. Can be used to provide additional context on router's
   * purpose and expected inputs.
   */
  description?: string;

  /**
   * List of routes.
   */
  routes?: Array<RouteListItem>;
}

export interface UpsertSplitConfig extends ActionTypeConfigUpsertBase {
  printPageSplitConfig?: UpsertSplitConfig.PrintPageSplitConfig;

  semanticPageSplitConfig?: UpsertSplitConfig.SemanticPageSplitConfig;

  splitType?: string;
}

export namespace UpsertSplitConfig {
  export interface PrintPageSplitConfig {
    /**
     * The unique ID of the action type configuration you want to use for this action.
     */
    nextActionTypeConfigID?: string;
  }

  export interface SemanticPageSplitConfig {
    itemClasses?: Array<ActionTypeConfigsAPI.SplitConfigSemanticPageItemClass>;
  }
}

export interface UpsertTransformConfig extends ActionTypeConfigUpsertBase {
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
   * Unique identifier of action type config to run after transformation. Currently
   * only email is supported.
   */
  nextActionTypeConfigID?: string;

  /**
   * Desired output structure defined in standard JSON Schema convention.
   */
  outputSchema?: unknown;

  /**
   * Name of output schema object.
   */
  outputSchemaName?: string;
}

export interface ActionTypeConfigListResponse {
  actionTypeConfigs?: Array<ActionTypeConfig>;
}

export type ActionTypeConfigCreateParams =
  | ActionTypeConfigCreateParams.CreateTransformConfig
  | ActionTypeConfigCreateParams.CreateRouteConfig
  | ActionTypeConfigCreateParams.CreateSplitConfig
  | ActionTypeConfigCreateParams.CreateJoinConfig
  | ActionTypeConfigCreateParams.CreateEmailConfig;

export declare namespace ActionTypeConfigCreateParams {
  export interface CreateTransformConfig {
    body: CreateTransformConfig.Body;
  }

  export namespace CreateTransformConfig {
    export interface Body
      extends ActionTypeConfigsAPI.ActionTypeConfigCreateBase,
        ActionTypeConfigsAPI.UpsertTransformConfig {}
  }

  export interface CreateRouteConfig {
    body: CreateRouteConfig.Body;
  }

  export namespace CreateRouteConfig {
    export interface Body
      extends ActionTypeConfigsAPI.ActionTypeConfigCreateBase,
        ActionTypeConfigsAPI.UpsertRouteConfig {}
  }

  export interface CreateSplitConfig {
    body: CreateSplitConfig.Body;
  }

  export namespace CreateSplitConfig {
    export interface Body
      extends ActionTypeConfigsAPI.ActionTypeConfigCreateBase,
        ActionTypeConfigsAPI.UpsertSplitConfig {}
  }

  export interface CreateJoinConfig {
    body: CreateJoinConfig.Body;
  }

  export namespace CreateJoinConfig {
    export interface Body
      extends ActionTypeConfigsAPI.ActionTypeConfigCreateBase,
        ActionTypeConfigsAPI.UpsertJoinConfig {}
  }

  export interface CreateEmailConfig {
    body: CreateEmailConfig.Body;
  }

  export namespace CreateEmailConfig {
    export interface Body
      extends ActionTypeConfigsAPI.ActionTypeConfigCreateBase,
        ActionTypeConfigsAPI.UpsertEmailConfig {}
  }
}

export type ActionTypeConfigUpdateParams =
  | ActionTypeConfigUpdateParams.UpsertTransformConfig
  | ActionTypeConfigUpdateParams.UpsertRouteConfig
  | ActionTypeConfigUpdateParams.UpsertSplitConfig
  | ActionTypeConfigUpdateParams.UpsertJoinConfig
  | ActionTypeConfigUpdateParams.UpsertEmailConfig;

export declare namespace ActionTypeConfigUpdateParams {
  export interface UpsertTransformConfig {
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

    name?: string;

    /**
     * Unique identifier of action type config to run after transformation. Currently
     * only email is supported.
     */
    nextActionTypeConfigID?: string;

    /**
     * Desired output structure defined in standard JSON Schema convention.
     */
    outputSchema?: unknown;

    /**
     * Name of output schema object.
     */
    outputSchemaName?: string;
  }

  export interface UpsertRouteConfig {
    /**
     * Description of router. Can be used to provide additional context on router's
     * purpose and expected inputs.
     */
    description?: string;

    name?: string;

    /**
     * List of routes.
     */
    routes?: Array<RouteListItem>;
  }

  export interface UpsertSplitConfig {
    name?: string;

    printPageSplitConfig?: UpsertSplitConfig.PrintPageSplitConfig;

    semanticPageSplitConfig?: UpsertSplitConfig.SemanticPageSplitConfig;

    splitType?: string;
  }

  export namespace UpsertSplitConfig {
    export interface PrintPageSplitConfig {
      /**
       * The unique ID of the action type configuration you want to use for this action.
       */
      nextActionTypeConfigID?: string;
    }

    export interface SemanticPageSplitConfig {
      itemClasses?: Array<ActionTypeConfigsAPI.SplitConfigSemanticPageItemClass>;
    }
  }

  export interface UpsertJoinConfig {
    /**
     * The type of join to perform.
     */
    joinType?: 'standard';

    name?: string;

    /**
     * Unique identifier of action type config to run after join.
     */
    nextActionTypeConfigID?: string;

    /**
     * Desired output structure defined in standard JSON Schema convention.
     */
    outputSchema?: unknown;

    /**
     * Name of output schema object.
     */
    outputSchemaName?: string;
  }

  export interface UpsertEmailConfig {
    /**
     * Body of the email. This can be HTML, and include template variables in the form
     * of `{{template_variable}}`. Template variables are taken from the output of the
     * transformation.
     */
    body?: string;

    /**
     * Email address to send the email from.
     */
    fromEmail?: string;

    /**
     * Name of the sender.
     */
    fromName?: string;

    name?: string;

    /**
     * Subject of the email. This can include template variables in the form of
     * `{{template_variable}}`. Template variables are taken from the output of the
     * transformation.
     */
    subject?: string;

    /**
     * Email address to send the email to.
     */
    toEmail?: string;

    /**
     * Name of the recipient.
     */
    toName?: string;
  }
}

export interface ActionTypeConfigListParams {
  /**
   * The type of the action.
   */
  actionType?: ActionType;

  actionTypeConfigIDs?: Array<string>;

  /**
   * A cursor to use in pagination. `endingBefore` is an action type config ID that
   * defines your place in the list.
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
   * A cursor to use in pagination. `startingAfter` is an action type config ID that
   * defines your place in the list.
   */
  startingAfter?: string;
}

export declare namespace ActionTypeConfigs {
  export {
    type ActionType as ActionType,
    type ActionTypeConfig as ActionTypeConfig,
    type ActionTypeConfigBase as ActionTypeConfigBase,
    type ActionTypeConfigCreateBase as ActionTypeConfigCreateBase,
    type ActionTypeConfigUpsertBase as ActionTypeConfigUpsertBase,
    type RouteListItem as RouteListItem,
    type SplitConfigSemanticPageItemClass as SplitConfigSemanticPageItemClass,
    type UpsertEmailConfig as UpsertEmailConfig,
    type UpsertJoinConfig as UpsertJoinConfig,
    type UpsertRouteConfig as UpsertRouteConfig,
    type UpsertSplitConfig as UpsertSplitConfig,
    type UpsertTransformConfig as UpsertTransformConfig,
    type ActionTypeConfigListResponse as ActionTypeConfigListResponse,
    type ActionTypeConfigCreateParams as ActionTypeConfigCreateParams,
    type ActionTypeConfigUpdateParams as ActionTypeConfigUpdateParams,
    type ActionTypeConfigListParams as ActionTypeConfigListParams,
  };
}
