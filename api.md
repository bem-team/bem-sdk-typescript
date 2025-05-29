# ActionTypeConfigs

Types:

- <code><a href="./src/resources/action-type-configs.ts">ActionType</a></code>
- <code><a href="./src/resources/action-type-configs.ts">ActionTypeConfig</a></code>
- <code><a href="./src/resources/action-type-configs.ts">ActionTypeConfigBase</a></code>
- <code><a href="./src/resources/action-type-configs.ts">ActionTypeConfigCreateBase</a></code>
- <code><a href="./src/resources/action-type-configs.ts">ActionTypeConfigUpsertBase</a></code>
- <code><a href="./src/resources/action-type-configs.ts">RouteListItem</a></code>
- <code><a href="./src/resources/action-type-configs.ts">SplitConfigSemanticPageItemClass</a></code>
- <code><a href="./src/resources/action-type-configs.ts">UpsertEmailConfig</a></code>
- <code><a href="./src/resources/action-type-configs.ts">UpsertJoinConfig</a></code>
- <code><a href="./src/resources/action-type-configs.ts">UpsertRouteConfig</a></code>
- <code><a href="./src/resources/action-type-configs.ts">UpsertSplitConfig</a></code>
- <code><a href="./src/resources/action-type-configs.ts">UpsertTransformConfig</a></code>
- <code><a href="./src/resources/action-type-configs.ts">ActionTypeConfigListResponse</a></code>

Methods:

- <code title="post /v1-alpha/action-type-configs">client.actionTypeConfigs.<a href="./src/resources/action-type-configs.ts">create</a>({ ...params }) -> ActionTypeConfig</code>
- <code title="get /v1-alpha/action-type-configs/{actionTypeConfigID}">client.actionTypeConfigs.<a href="./src/resources/action-type-configs.ts">retrieve</a>(actionTypeConfigID) -> ActionTypeConfig</code>
- <code title="patch /v1-alpha/action-type-configs/{actionTypeConfigID}">client.actionTypeConfigs.<a href="./src/resources/action-type-configs.ts">update</a>(actionTypeConfigID, { ...params }) -> ActionTypeConfig</code>
- <code title="get /v1-alpha/action-type-configs">client.actionTypeConfigs.<a href="./src/resources/action-type-configs.ts">list</a>({ ...params }) -> ActionTypeConfigListResponse</code>
- <code title="delete /v1-alpha/action-type-configs/{actionTypeConfigID}">client.actionTypeConfigs.<a href="./src/resources/action-type-configs.ts">delete</a>(actionTypeConfigID) -> void</code>

# Actions

Types:

- <code><a href="./src/resources/actions.ts">ActionBase</a></code>
- <code><a href="./src/resources/actions.ts">ActionCreateBase</a></code>
- <code><a href="./src/resources/actions.ts">CreateActionBase</a></code>
- <code><a href="./src/resources/actions.ts">EmailActionBase</a></code>
- <code><a href="./src/resources/actions.ts">GetActionsResponse</a></code>
- <code><a href="./src/resources/actions.ts">JoinActionBase</a></code>
- <code><a href="./src/resources/actions.ts">RouteActionBase</a></code>
- <code><a href="./src/resources/actions.ts">SplitActionBase</a></code>
- <code><a href="./src/resources/actions.ts">TransformActionBase</a></code>

Methods:

- <code title="post /v1-alpha/actions">client.actions.<a href="./src/resources/actions.ts">create</a>({ ...params }) -> GetActionsResponse</code>
- <code title="get /v1-alpha/actions">client.actions.<a href="./src/resources/actions.ts">list</a>({ ...params }) -> GetActionsResponse</code>
- <code title="patch /v1-alpha/actions/route">client.actions.<a href="./src/resources/actions.ts">correctRoute</a>({ ...params }) -> void</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">Event</a></code>
- <code><a href="./src/resources/events.ts">EventBase</a></code>
- <code><a href="./src/resources/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /v1-alpha/events/{eventID}">client.events.<a href="./src/resources/events.ts">retrieve</a>(eventID) -> Event</code>
- <code title="get /v1-alpha/events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> EventListResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks.ts">Task</a></code>
- <code><a href="./src/resources/tasks.ts">TaskStatus</a></code>
- <code><a href="./src/resources/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /v1-alpha/tasks/{taskID}">client.tasks.<a href="./src/resources/tasks.ts">retrieve</a>(taskID) -> Task</code>
- <code title="get /v1-alpha/tasks">client.tasks.<a href="./src/resources/tasks.ts">list</a>({ ...params }) -> TaskListResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionListResponse</a></code>

Methods:

- <code title="post /v1-alpha/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">create</a>({ ...params }) -> Subscription</code>
- <code title="get /v1-alpha/subscriptions/{subscriptionID}">client.subscriptions.<a href="./src/resources/subscriptions.ts">retrieve</a>(subscriptionID) -> Subscription</code>
- <code title="patch /v1-alpha/subscriptions/{subscriptionID}">client.subscriptions.<a href="./src/resources/subscriptions.ts">update</a>(subscriptionID, { ...params }) -> Subscription</code>
- <code title="get /v1-alpha/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="delete /v1-alpha/subscriptions/{subscriptionID}">client.subscriptions.<a href="./src/resources/subscriptions.ts">delete</a>(subscriptionID) -> void</code>

# Pipelines

Types:

- <code><a href="./src/resources/pipelines.ts">Pipeline</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineRetrieveResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineListResponse</a></code>

Methods:

- <code title="post /v1-beta/pipelines">client.pipelines.<a href="./src/resources/pipelines.ts">create</a>({ ...params }) -> Pipeline</code>
- <code title="get /v1-beta/pipelines/{pipelineID}">client.pipelines.<a href="./src/resources/pipelines.ts">retrieve</a>(pipelineID) -> PipelineRetrieveResponse</code>
- <code title="patch /v1-beta/pipelines/{pipelineID}">client.pipelines.<a href="./src/resources/pipelines.ts">update</a>(pipelineID, { ...params }) -> Pipeline</code>
- <code title="get /v1-beta/pipelines">client.pipelines.<a href="./src/resources/pipelines.ts">list</a>({ ...params }) -> PipelineListResponse</code>
- <code title="delete /v1-beta/pipelines/{pipelineID}">client.pipelines.<a href="./src/resources/pipelines.ts">delete</a>(pipelineID) -> void</code>

# Transformations

Types:

- <code><a href="./src/resources/transformations.ts">AnyType</a></code>
- <code><a href="./src/resources/transformations.ts">InputType</a></code>
- <code><a href="./src/resources/transformations.ts">UpdateTransformation</a></code>
- <code><a href="./src/resources/transformations.ts">UpdateTransformationResponse</a></code>
- <code><a href="./src/resources/transformations.ts">TransformationCreateResponse</a></code>
- <code><a href="./src/resources/transformations.ts">TransformationListResponse</a></code>
- <code><a href="./src/resources/transformations.ts">TransformationDeleteResponse</a></code>
- <code><a href="./src/resources/transformations.ts">TransformationListErrorsResponse</a></code>

Methods:

- <code title="post /v1-beta/transformations">client.transformations.<a href="./src/resources/transformations.ts">create</a>({ ...params }) -> TransformationCreateResponse</code>
- <code title="put /v1-beta/transformations">client.transformations.<a href="./src/resources/transformations.ts">update</a>({ ...params }) -> UpdateTransformationResponse</code>
- <code title="get /v1-beta/transformations">client.transformations.<a href="./src/resources/transformations.ts">list</a>({ ...params }) -> TransformationListResponse</code>
- <code title="delete /v1-beta/transformations">client.transformations.<a href="./src/resources/transformations.ts">delete</a>({ ...params }) -> TransformationDeleteResponse</code>
- <code title="patch /v1-beta/transformations">client.transformations.<a href="./src/resources/transformations.ts">deprecatedUpdate</a>({ ...params }) -> UpdateTransformationResponse</code>
- <code title="get /v1-beta/transformations/errors">client.transformations.<a href="./src/resources/transformations.ts">listErrors</a>({ ...params }) -> TransformationListErrorsResponse</code>

# WebhookSecret

Types:

- <code><a href="./src/resources/webhook-secret.ts">WebhookSecret</a></code>

Methods:

- <code title="post /v1-beta/webhook-secret">client.webhookSecret.<a href="./src/resources/webhook-secret.ts">create</a>() -> WebhookSecret</code>
- <code title="get /v1-beta/webhook-secret">client.webhookSecret.<a href="./src/resources/webhook-secret.ts">retrieve</a>() -> WebhookSecret</code>
