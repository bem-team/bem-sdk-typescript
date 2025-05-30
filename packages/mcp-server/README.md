# Bem SDK TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export BEM_SDK_API_KEY="My API Key"
export BEM_SDK_ENVIRONMENT="sandbox"
npx -y bem-ai-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "bem_ai_api": {
      "command": "npx",
      "args": ["-y", "bem-ai-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "BEM_SDK_API_KEY": "My API Key",
        "BEM_SDK_ENVIRONMENT": "sandbox"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "bem-ai-mcp/server";

// import a specific tool
import createActionTypeConfigs from "bem-ai-mcp/tools/action-type-configs/create-action-type-configs";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createActionTypeConfigs, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `action_type_configs`:

- `create_action_type_configs` (`write`): Create an Action Type Config
- `retrieve_action_type_configs` (`read`): Get an Action Type Config
- `update_action_type_configs` (`write`): Update an Action Type Config
- `list_action_type_configs` (`read`): List Action Type Configs
- `delete_action_type_configs` (`write`): Delete an Action Type Config

### Resource `actions`:

- `create_actions` (`write`): Create a batch of Actions
- `list_actions` (`read`): List Actions
- `correct_route_actions` (`write`): Updates a route event with feedback on the desired router choices.

### Resource `events`:

- `retrieve_events` (`read`): Get an Event
- `list_events` (`read`): List Events

### Resource `tasks`:

- `retrieve_tasks` (`read`): Get a Task
- `list_tasks` (`read`): List Tasks

### Resource `subscriptions`:

- `create_subscriptions` (`write`): Creates a new subscription to listen to transform or error events.
- `retrieve_subscriptions` (`read`): Get a Subscription
- `update_subscriptions` (`write`): Updates an existing subscription. Follow conventional PATCH behavior, so only included fields will be updated.
- `list_subscriptions` (`read`): List Subscriptions
- `delete_subscriptions` (`write`): Deletes an existing subscription.

### Resource `pipelines`:

- `create_pipelines` (`write`): Creates a new pipeline to transform data, given an output schema. It returns the created pipeline's details. Pipelines are long-lived, so we recommend you create them outside of your application loop and reuse them.
- `retrieve_pipelines` (`read`): Retrieves configuration of an existing pipeline.
- `update_pipelines` (`write`): Updates an existing pipeline. Follow conventional PATCH behavior, so only included fields will be updated.
- `list_pipelines` (`read`): Retrieves configurations for all existing pipelines.
- `delete_pipelines` (`write`): Deletes an existing pipeline and all related transformations.

  **IMPORTANT NOTE:** be sure you have exported any relevant transformations produced by the pipeline before deleting given they won't be accessible through our API after deleting the pipeline.

### Resource `transformations`:

- `create_transformations` (`write`): Creates a batch of new transformations, each with a content and input type, and queues them up in bem's servers. Bem supports both `application/json` and `multipart/form-data` requests, where the latter is useful for large files.
- `update_transformations` (`write`): Updates a transformation with feedback on the corrected transformation value.
- `list_transformations` (`read`): Lists all performed transformations, with either pagination or specific reference IDs.
- `delete_transformations` (`write`): Deletes transformations by specifying pipeline ID, list of reference IDs, or list of transformation IDs. Will delete intersection of all params specified.
- `deprecated_update_transformations` (`write`): Deprecating will be replaced by put. Updates a transformation with feedback on the corrected transformation value.
- `list_errors_transformations` (`read`): Lists all errors encountered while attempting to transform data, with either pagination or specific reference IDs.

### Resource `webhook_secret`:

- `create_webhook_secret` (`write`): Generates a new webhook secret to be used for webhook signatures. If a webhook secret already exists, this endpoint will overwrite the previous secret and generate a new one.
- `retrieve_webhook_secret` (`read`): Gets the current webhook secret for your account.
