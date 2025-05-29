// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EventsAPI from './events';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Events extends APIResource {
  /**
   * Get an Event
   */
  retrieve(eventID: string, options?: RequestOptions): APIPromise<Event> {
    return this._client.get(path`/v1-alpha/events/${eventID}`, options);
  }

  /**
   * List Events
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EventListResponse> {
    return this._client.get('/v1-alpha/events', { query, ...options });
  }
}

export type Event =
  | Event.TransformEvent
  | Event.RouteEvent
  | Event.SplitCollectionEvent
  | Event.SplitItemEvent
  | Event.ErrorEvent
  | Event.JoinEvent;

export namespace Event {
  export interface TransformEvent extends EventsAPI.EventBase {
    /**
     * Unique identifier of action type configuration that this event is associated
     * with.
     */
    actionTypeConfigID: string;

    /**
     * The number of items that were transformed. Used for batch transformations to
     * indicate how many items were transformed.
     */
    itemCount: number;

    /**
     * The offset of the first item that was transformed. Used for batch
     * transformations to indicate which item in the batch this event corresponds to.
     */
    itemOffset: number;

    /**
     * The transformed content of the input. The structure of this object is defined by
     * the action type configuration.
     */
    transformedContent: unknown;

    eventType?: 'transform';

    /**
     * List of properties that were invalid in the input.
     */
    invalidProperties?: Array<string>;
  }

  export interface RouteEvent extends EventsAPI.EventBase {
    /**
     * Unique identifier of action type configuration that this event is associated
     * with.
     */
    actionTypeConfigID: string;

    /**
     * The choice made by the router action.
     */
    choice: string;

    eventType?: 'route';

    /**
     * The presigned S3 URL of the file that was routed.
     */
    s3URL?: string;
  }

  export interface SplitCollectionEvent extends EventsAPI.EventBase {
    /**
     * Unique identifier of action type configuration that this event is associated
     * with.
     */
    actionTypeConfigID: string;

    outputType: 'print_page' | 'semantic_page';

    printPageOutput: SplitCollectionEvent.PrintPageOutput;

    semanticPageOutput: SplitCollectionEvent.SemanticPageOutput;

    eventType?: 'split_collection';
  }

  export namespace SplitCollectionEvent {
    export interface PrintPageOutput {
      itemCount?: number;

      items?: Array<PrintPageOutput.Item>;
    }

    export namespace PrintPageOutput {
      export interface Item {
        itemOffset?: number;

        itemReferenceID?: string;

        /**
         * The presigned S3 URL of the file that was split.
         */
        s3URL?: string;
      }
    }

    export interface SemanticPageOutput {
      itemCount?: number;

      items?: Array<SemanticPageOutput.Item>;

      pageCount?: number;
    }

    export namespace SemanticPageOutput {
      export interface Item {
        itemClass?: string;

        itemClassCount?: number;

        itemClassOffset?: number;

        itemOffset?: number;

        itemReferenceID?: string;

        pageEnd?: number;

        pageStart?: number;

        s3URL?: string;
      }
    }
  }

  export interface SplitItemEvent extends EventsAPI.EventBase {
    outputType: 'print_page' | 'semantic_page';

    printPageOutput?: SplitItemEvent.PrintPageOutput;

    semanticPageOutput?: SplitItemEvent.SemanticPageOutput;
  }

  export namespace SplitItemEvent {
    export interface PrintPageOutput {
      collectionReferenceID?: string;

      itemCount?: number;

      itemOffset?: number;

      /**
       * The presigned S3 URL of the file that was split.
       */
      s3URL?: string;
    }

    export interface SemanticPageOutput {
      collectionReferenceID?: string;

      itemClass?: string;

      itemClassCount?: number;

      itemClassOffset?: number;

      itemCount?: number;

      itemOffset?: number;

      pageCount?: number;

      pageEnd?: number;

      pageStart?: number;

      s3URL?: string;
    }
  }

  export interface ErrorEvent extends EventsAPI.EventBase {
    /**
     * Unique identifier of action type configuration that this event is associated
     * with.
     */
    actionTypeConfigID: string;

    /**
     * Error message.
     */
    message: string;

    eventType?: 'error';
  }

  export interface JoinEvent extends EventsAPI.EventBase {
    /**
     * Unique identifier of action type configuration that this event is associated
     * with.
     */
    actionTypeConfigID: string;

    /**
     * List of properties that were invalid in the input.
     */
    invalidProperties: Array<string>;

    /**
     * The items that were joined.
     */
    items: Array<JoinEvent.Item>;

    /**
     * The type of join that was performed.
     */
    joinType: 'standard';

    /**
     * The transformed content of the input. The structure of this object is defined by
     * the action type configuration.
     */
    transformedContent: unknown;

    eventType?: 'join';
  }

  export namespace JoinEvent {
    export interface Item {
      /**
       * The number of items that were transformed.
       */
      itemCount: number;

      /**
       * The offset of the first item that was transformed. Used for batch
       * transformations to indicate which item in the batch this event corresponds to.
       */
      itemOffset: number;

      /**
       * The unique ID you use internally to refer to this data point.
       */
      itemReferenceID: string;

      /**
       * The presigned S3 URL of the file that was joined.
       */
      s3URL?: string;
    }
  }
}

export interface EventBase {
  /**
   * Unique ID generated by bem to identify the event.
   */
  eventID: string;

  /**
   * The unique ID you use internally to refer to this data point, propagated from
   * the original action input.
   */
  referenceID: string;
}

export interface EventListResponse {
  events?: Array<Event>;

  /**
   * The total number of results available.
   */
  totalCount?: number;
}

export interface EventListParams {
  actionTypeConfigIDs?: Array<string>;

  /**
   * A cursor to use in pagination. `endingBefore` is an event ID that defines your
   * place in the list.
   */
  endingBefore?: string;

  eventIDs?: Array<string>;

  eventTypes?: Array<'transform' | 'route' | 'split_collection' | 'split_item' | 'error' | 'join'>;

  limit?: number;

  referenceIDs?: Array<string>;

  /**
   * Specifies sorting behavior. The two options are `asc` and `desc` to sort
   * ascending and descending respectively, with default sort being ascending. Paging
   * works in both directions.
   */
  sortOrder?: 'asc' | 'desc';

  /**
   * A cursor to use in pagination. `startingAfter` is an event ID that defines your
   * place in the list.
   */
  startingAfter?: string;
}

export declare namespace Events {
  export {
    type Event as Event,
    type EventBase as EventBase,
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };
}
