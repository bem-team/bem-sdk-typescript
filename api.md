# Alpha

## ActionTypeConfigs

Types:

- <code><a href="./src/resources/alpha/action-type-configs.ts">ActionType</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">ActionTypeConfig</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">ActionTypeConfigBase</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">ActionTypeConfigCreateBase</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">ActionTypeConfigUpsertBase</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">RouteListItem</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">SplitConfigSemanticPageItemClass</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">UpsertEmailConfig</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">UpsertJoinConfig</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">UpsertRouteConfig</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">UpsertSplitConfig</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">UpsertTransformConfig</a></code>
- <code><a href="./src/resources/alpha/action-type-configs.ts">ActionTypeConfigListResponse</a></code>

Methods:

- <code title="post /v1-alpha/action-type-configs">client.alpha.actionTypeConfigs.<a href="./src/resources/alpha/action-type-configs.ts">create</a>({ ...params }) -> ActionTypeConfig</code>
- <code title="get /v1-alpha/action-type-configs/{actionTypeConfigID}">client.alpha.actionTypeConfigs.<a href="./src/resources/alpha/action-type-configs.ts">retrieve</a>(actionTypeConfigID) -> ActionTypeConfig</code>
- <code title="patch /v1-alpha/action-type-configs/{actionTypeConfigID}">client.alpha.actionTypeConfigs.<a href="./src/resources/alpha/action-type-configs.ts">update</a>(actionTypeConfigID, { ...params }) -> ActionTypeConfig</code>
- <code title="get /v1-alpha/action-type-configs">client.alpha.actionTypeConfigs.<a href="./src/resources/alpha/action-type-configs.ts">list</a>({ ...params }) -> ActionTypeConfigListResponse</code>
- <code title="delete /v1-alpha/action-type-configs/{actionTypeConfigID}">client.alpha.actionTypeConfigs.<a href="./src/resources/alpha/action-type-configs.ts">delete</a>(actionTypeConfigID) -> void</code>

## Actions

Types:

- <code><a href="./src/resources/alpha/actions.ts">ActionBase</a></code>
- <code><a href="./src/resources/alpha/actions.ts">ActionCreateBase</a></code>
- <code><a href="./src/resources/alpha/actions.ts">CreateActionBase</a></code>
- <code><a href="./src/resources/alpha/actions.ts">EmailActionBase</a></code>
- <code><a href="./src/resources/alpha/actions.ts">GetActionsResponse</a></code>
- <code><a href="./src/resources/alpha/actions.ts">JoinActionBase</a></code>
- <code><a href="./src/resources/alpha/actions.ts">RouteActionBase</a></code>
- <code><a href="./src/resources/alpha/actions.ts">SplitActionBase</a></code>
- <code><a href="./src/resources/alpha/actions.ts">TransformActionBase</a></code>

Methods:

- <code title="post /v1-alpha/actions">client.alpha.actions.<a href="./src/resources/alpha/actions.ts">create</a>({ ...params }) -> GetActionsResponse</code>
- <code title="get /v1-alpha/actions">client.alpha.actions.<a href="./src/resources/alpha/actions.ts">list</a>({ ...params }) -> GetActionsResponse</code>
- <code title="patch /v1-alpha/actions/route">client.alpha.actions.<a href="./src/resources/alpha/actions.ts">correctRoute</a>({ ...params }) -> void</code>

## Events

Types:

- <code><a href="./src/resources/alpha/events.ts">Event</a></code>
- <code><a href="./src/resources/alpha/events.ts">EventBase</a></code>
- <code><a href="./src/resources/alpha/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /v1-alpha/events/{eventID}">client.alpha.events.<a href="./src/resources/alpha/events.ts">retrieve</a>(eventID) -> Event</code>
- <code title="get /v1-alpha/events">client.alpha.events.<a href="./src/resources/alpha/events.ts">list</a>({ ...params }) -> EventListResponse</code>

## Tasks

Types:

- <code><a href="./src/resources/alpha/tasks.ts">Task</a></code>
- <code><a href="./src/resources/alpha/tasks.ts">TaskStatus</a></code>
- <code><a href="./src/resources/alpha/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /v1-alpha/tasks/{taskID}">client.alpha.tasks.<a href="./src/resources/alpha/tasks.ts">retrieve</a>(taskID) -> Task</code>
- <code title="get /v1-alpha/tasks">client.alpha.tasks.<a href="./src/resources/alpha/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/alpha/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/alpha/subscriptions.ts">SubscriptionListResponse</a></code>

Methods:

- <code title="post /v1-alpha/subscriptions">client.alpha.subscriptions.<a href="./src/resources/alpha/subscriptions.ts">create</a>({ ...params }) -> Subscription</code>
- <code title="get /v1-alpha/subscriptions/{subscriptionID}">client.alpha.subscriptions.<a href="./src/resources/alpha/subscriptions.ts">retrieve</a>(subscriptionID) -> Subscription</code>
- <code title="patch /v1-alpha/subscriptions/{subscriptionID}">client.alpha.subscriptions.<a href="./src/resources/alpha/subscriptions.ts">update</a>(subscriptionID, { ...params }) -> Subscription</code>
- <code title="get /v1-alpha/subscriptions">client.alpha.subscriptions.<a href="./src/resources/alpha/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="delete /v1-alpha/subscriptions/{subscriptionID}">client.alpha.subscriptions.<a href="./src/resources/alpha/subscriptions.ts">delete</a>(subscriptionID) -> void</code>

# Beta

## Pipelines

Types:

- <code><a href="./src/resources/beta/pipelines.ts">Pipeline</a></code>
- <code><a href="./src/resources/beta/pipelines.ts">PipelineRetrieveResponse</a></code>
- <code><a href="./src/resources/beta/pipelines.ts">PipelineListResponse</a></code>

Methods:

- <code title="post /v1-beta/pipelines">client.beta.pipelines.<a href="./src/resources/beta/pipelines.ts">create</a>({ ...params }) -> Pipeline</code>
- <code title="get /v1-beta/pipelines/{pipelineID}">client.beta.pipelines.<a href="./src/resources/beta/pipelines.ts">retrieve</a>(pipelineID) -> PipelineRetrieveResponse</code>
- <code title="patch /v1-beta/pipelines/{pipelineID}">client.beta.pipelines.<a href="./src/resources/beta/pipelines.ts">update</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /v1-beta/pipelines">client.beta.pipelines.<a href="./src/resources/beta/pipelines.ts">list</a>({ ...params }) -> PipelineListResponse</code>
- <code title="delete /v1-beta/pipelines/{pipelineID}">client.beta.pipelines.<a href="./src/resources/beta/pipelines.ts">delete</a>(pipelineID) -> void</code>

## Transformations

Types:

- <code><a href="./src/resources/beta/transformations.ts">AnyType</a></code>
- <code><a href="./src/resources/beta/transformations.ts">InputType</a></code>
- <code><a href="./src/resources/beta/transformations.ts">UpdateTransformation</a></code>
- <code><a href="./src/resources/beta/transformations.ts">UpdateTransformationResponse</a></code>
- <code><a href="./src/resources/beta/transformations.ts">TransformationCreateResponse</a></code>
- <code><a href="./src/resources/beta/transformations.ts">TransformationListResponse</a></code>
- <code><a href="./src/resources/beta/transformations.ts">TransformationDeleteResponse</a></code>
- <code><a href="./src/resources/beta/transformations.ts">TransformationListErrorsResponse</a></code>

Methods:

- <code title="post /v1-beta/transformations">client.beta.transformations.<a href="./src/resources/beta/transformations.ts">create</a>({ ...params }) -> TransformationCreateResponse</code>
- <code title="put /v1-beta/transformations">client.beta.transformations.<a href="./src/resources/beta/transformations.ts">update</a>({ ...params }) -> UpdateTransformationResponse</code>
- <code title="get /v1-beta/transformations">client.beta.transformations.<a href="./src/resources/beta/transformations.ts">list</a>({ ...params }) -> TransformationListResponse</code>
- <code title="delete /v1-beta/transformations">client.beta.transformations.<a href="./src/resources/beta/transformations.ts">delete</a>({ ...params }) -> TransformationDeleteResponse</code>
- <code title="patch /v1-beta/transformations">client.beta.transformations.<a href="./src/resources/beta/transformations.ts">deprecatedUpdate</a>({ ...params }) -> UpdateTransformationResponse</code>
- <code title="get /v1-beta/transformations/errors">client.beta.transformations.<a href="./src/resources/beta/transformations.ts">listErrors</a>({ ...params }) -> TransformationListErrorsResponse</code>

## WebhookSecret

Types:

- <code><a href="./src/resources/beta/webhook-secret.ts">WebhookSecret</a></code>

Methods:

- <code title="post /v1-beta/webhook-secret">client.beta.webhookSecret.<a href="./src/resources/beta/webhook-secret.ts">create</a>() -> WebhookSecret</code>
- <code title="get /v1-beta/webhook-secret">client.beta.webhookSecret.<a href="./src/resources/beta/webhook-secret.ts">retrieve</a>() -> WebhookSecret</code>
