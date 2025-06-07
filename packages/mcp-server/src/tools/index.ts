// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_action_type_configs from './action-type-configs/create-action-type-configs';
import retrieve_action_type_configs from './action-type-configs/retrieve-action-type-configs';
import update_action_type_configs from './action-type-configs/update-action-type-configs';
import list_action_type_configs from './action-type-configs/list-action-type-configs';
import delete_action_type_configs from './action-type-configs/delete-action-type-configs';
import create_actions from './actions/create-actions';
import list_actions from './actions/list-actions';
import correct_route_actions from './actions/correct-route-actions';
import retrieve_events from './events/retrieve-events';
import list_events from './events/list-events';
import retrieve_tasks from './tasks/retrieve-tasks';
import list_tasks from './tasks/list-tasks';
import create_subscriptions from './subscriptions/create-subscriptions';
import retrieve_subscriptions from './subscriptions/retrieve-subscriptions';
import update_subscriptions from './subscriptions/update-subscriptions';
import list_subscriptions from './subscriptions/list-subscriptions';
import delete_subscriptions from './subscriptions/delete-subscriptions';
import create_pipelines from './pipelines/create-pipelines';
import retrieve_pipelines from './pipelines/retrieve-pipelines';
import update_pipelines from './pipelines/update-pipelines';
import list_pipelines from './pipelines/list-pipelines';
import delete_pipelines from './pipelines/delete-pipelines';
import create_transformations from './transformations/create-transformations';
import update_transformations from './transformations/update-transformations';
import list_transformations from './transformations/list-transformations';
import delete_transformations from './transformations/delete-transformations';
import deprecated_update_transformations from './transformations/deprecated-update-transformations';
import list_errors_transformations from './transformations/list-errors-transformations';
import create_webhook_secret from './webhook-secret/create-webhook-secret';
import retrieve_webhook_secret from './webhook-secret/retrieve-webhook-secret';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_action_type_configs);
addEndpoint(retrieve_action_type_configs);
addEndpoint(update_action_type_configs);
addEndpoint(list_action_type_configs);
addEndpoint(delete_action_type_configs);
addEndpoint(create_actions);
addEndpoint(list_actions);
addEndpoint(correct_route_actions);
addEndpoint(retrieve_events);
addEndpoint(list_events);
addEndpoint(retrieve_tasks);
addEndpoint(list_tasks);
addEndpoint(create_subscriptions);
addEndpoint(retrieve_subscriptions);
addEndpoint(update_subscriptions);
addEndpoint(list_subscriptions);
addEndpoint(delete_subscriptions);
addEndpoint(create_pipelines);
addEndpoint(retrieve_pipelines);
addEndpoint(update_pipelines);
addEndpoint(list_pipelines);
addEndpoint(delete_pipelines);
addEndpoint(create_transformations);
addEndpoint(update_transformations);
addEndpoint(list_transformations);
addEndpoint(delete_transformations);
addEndpoint(deprecated_update_transformations);
addEndpoint(list_errors_transformations);
addEndpoint(create_webhook_secret);
addEndpoint(retrieve_webhook_secret);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
