// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionTypeConfigsAPI from './action-type-configs';
import {
  ActionType,
  ActionTypeConfig,
  ActionTypeConfigBase,
  ActionTypeConfigCreateBase,
  ActionTypeConfigCreateParams,
  ActionTypeConfigListParams,
  ActionTypeConfigListResponse,
  ActionTypeConfigUpdateParams,
  ActionTypeConfigUpsertBase,
  ActionTypeConfigs,
  RouteListItem,
  SplitConfigSemanticPageItemClass,
  UpsertEmailConfig,
  UpsertJoinConfig,
  UpsertRouteConfig,
  UpsertSplitConfig,
  UpsertTransformConfig,
} from './action-type-configs';
import * as ActionsAPI from './actions';
import {
  ActionBase,
  ActionCorrectRouteParams,
  ActionCreateBase,
  ActionCreateParams,
  ActionListParams,
  Actions,
  CreateActionBase,
  EmailActionBase,
  GetActionsResponse,
  JoinActionBase,
  RouteActionBase,
  SplitActionBase,
  TransformActionBase,
} from './actions';
import * as EventsAPI from './events';
import { Event, EventBase, EventListParams, EventListResponse, Events } from './events';
import * as SubscriptionsAPI from './subscriptions';
import {
  Subscription,
  SubscriptionCreateParams,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionUpdateParams,
  Subscriptions,
} from './subscriptions';
import * as TasksAPI from './tasks';
import { Task, TaskListParams, TaskListResponse, TaskStatus, Tasks } from './tasks';

export class Alpha extends APIResource {
  actionTypeConfigs: ActionTypeConfigsAPI.ActionTypeConfigs = new ActionTypeConfigsAPI.ActionTypeConfigs(
    this._client,
  );
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Alpha.ActionTypeConfigs = ActionTypeConfigs;
Alpha.Actions = Actions;
Alpha.Events = Events;
Alpha.Tasks = Tasks;
Alpha.Subscriptions = Subscriptions;

export declare namespace Alpha {
  export {
    ActionTypeConfigs as ActionTypeConfigs,
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

  export {
    Actions as Actions,
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

  export {
    Events as Events,
    type Event as Event,
    type EventBase as EventBase,
    type EventListResponse as EventListResponse,
    type EventListParams as EventListParams,
  };

  export {
    Tasks as Tasks,
    type Task as Task,
    type TaskStatus as TaskStatus,
    type TaskListResponse as TaskListResponse,
    type TaskListParams as TaskListParams,
  };

  export {
    Subscriptions as Subscriptions,
    type Subscription as Subscription,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionListParams as SubscriptionListParams,
  };
}
