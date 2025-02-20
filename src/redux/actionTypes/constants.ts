const sessionActionTypes = {
  LOGOUT: 'LOGOUT',
  ACCOUNT_LOGIN: 'ACCOUNT_LOGIN',
  ACCOUNT_SIGNUP: 'ACCOUNT_SIGNUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  UPDATE_EMAIL: 'UPDATE_EMAIL',
};

const serverInfoActionTypes = {
  SERVER_INFO: 'SERVER_INFO',
};

const hubAuthActionTypes = {
  AUTHORISE_HUB: 'AUTHORISE_HUB',
  DISCONNECT_HUB: 'DISCONNECT_HUB',
  SHOW_HUB_CONNECTION_PROMPT_POPUP: 'SHOW_HUB_CONNECTION_PROMPT_POPUP',
  HIDE_HUB_CONNECTION_PROMPT_POPUP: 'HIDE_HUB_CONNECTION_PROMPT_POPUP',
};

const userActionTypes = {
  USERS_GET_MY_USER: 'USERS_GET_MY_USER',
  USERS_GET_USER_FOR_ID: 'USERS_GET_USER_FOR_ID',
  UPDATE_USER_EMAIL: 'UPDATE_USER_EMAIL',
  SAVE_USER_EMAIL: 'SAVE_USER_EMAIL',
};

const organizationActionTypes = {
  ORGANIZATIONS_GET_MY_ORGANIZATION: 'ORGANIZATIONS_GET_MY_ORGANIZATION',
  ORGANIZATIONS_GET_INVITE_FOR_CODE: 'ORGANIZATIONS_GET_INVITE_FOR_CODE',
  ORGANIZATIONS_GET_INVITES: 'ORGANIZATIONS_GET_INVITES',
  ORGANIZATIONS_GET_MEMBERS: 'ORGANIZATIONS_GET_MEMBERS',
  ORGANIZATIONS_INVITE: 'ORGANIZATIONS_INVITE',
  ORGANIZATIONS_DELETE_INVITE: 'ORGANIZATIONS_DELETE_INVITE',
  ORGANIZATIONS_RETRY_INVOICE: 'ORGANIZATIONS_RETRY_INVOICE',
};

const pipelineActionTypes = {
  PIPELINES_GET_MY_PIPELINES: 'PIPELINES_GET_MY_PIPELINES',
  PIPELINES_GET_PIPELINE_FOR_ID: 'PIPELINES_GET_PIPELINE_FOR_ID',
  RUNS_GET_PIPELINE_FOR_ID: 'RUNS_GET_PIPELINE_FOR_ID',
};

const WorkspaceActionTypes = {
  WORKSPACES_GET_MY_WORKSPACES: 'WORKSPACES_GET_MY_WORKSPACES',
  GET_MY_WORKSPACE_STATS: 'GET_MY_WORKSPACE_STATS',
  SELECT_WORKSPACE_FROM_MY_WORKSPACES: 'SELECT_WORKSPACE_FROM_MY_WORKSPACES',
};
const stackActionTypes = {
  STACKS_GET_MY_STACKS: 'STACKS_GET_MY_STACKS',
  STACKS_GET_STACK_FOR_ID: 'STACKS_GET_STACK_FOR_ID',
  RUNS_GET_STACK_FOR_ID: 'RUNS_GET_STACK_FOR_ID',
};

const secretActionTypes = {
  SECRETS_GET_MY_SECRETS: 'SECRETS_GET_MY_SECRETS',
  SECRETS_GET_SECRET_FOR_ID: 'SECRETS_GET_SECRET_FOR_ID',
};

const connectorActionTypes = {
  CONNECTORS_GET_MY_CONNECTORS: 'CONNECTORS_GET_MY_CONNECTORS',
  CONNECTORS_GET_CONNECTOR_FOR_ID: 'CONNECTORS_GET_CONNECTOR_FOR_ID',
  CONNECTORS_GET_CONNECTORS_TYPES: 'CONNECTORS_GET_CONNECTORS_TYPES',
  CONNECTORS_GET_CONNECTORCOMPONENTS_TYPES:
    'CONNECTORS_GET_CONNECTORCOMPONENTS_TYPES',
};

const rolesActionTypes = {
  ROLES_GET_ALL_ROLES: 'ROLES_GET_ALL_ROLES',
};

const stackComponentActionTypes = {
  STACKCOMPONENTS_GET_STACKCOMPONENTS_TYPE:
    'STACKCOMPONENTS_GET_STACKCOMPONENTS_TYPE',
  STACKCOMPONENTS_GET_STACKCOMPONENTS_LIST:
    'STACKCOMPONENTS_GET_STACKCOMPONENTS_LIST',
  STACKCOMPONENTS_GET_STACKCOMPONENT_FOR_ID:
    'STACKCOMPONENTS_GET_STACKCOMPONENT_FOR_ID',
  RUNS_GET_STACKCOMPONENT_FOR_ID: 'RUNS_GET_STACKCOMPONENT_FOR_ID',
};

const flavorActionTypes = {
  FLAVORS_GET_FLAVORS_ALL: 'FLAVORS_GET_FLAVORS_ALL',
  FLAVORS_GET_FLAVORS_TYPE: 'FLAVORS_GET_FLAVORS_TYPE',
};

const runActionTypes = {
  GET_ARTIFACT_VISUALIZATION: 'GET_ARTIFACT_VISUALIZATION',
  SET_RUNS_DETAILS: 'SET_RUNS_DETAILS',
  GET_ARTIFACT_DATA: 'GET_ARTIFACT_DATA',
  GET_STEP_DATA: 'GET_STEP_DATA',
  RUNS_GET_ALL_RUNS: 'RUNS_GET_ALL_RUNS',
  RUNS_GET_RUN_FOR_ID: 'RUNS_GET_RUN_FOR_ID',
  GRAPH_FOR_RUN_ID: 'GRAPH_FOR_RUN_ID',
};

const repositoryActionTypes = {
  REPOSITORY_GET_ALL: 'REPOSITORY_GET_ALL',
  REPOSITORY_BY_ID: 'REPOSITORY_BY_ID',
  RUNS_GET_BY_REPOSITORY_ID: 'RUNS_GET_BY_REPOSITORY_ID',
};

const repositoryPagesActionTypes = {
  REPOSITORY_PAGES_SET_FETCHING: 'REPOSITORY_PAGES_SET_FETCHING',
};

const pipelinePagesActionTypes = {
  PIPELINE_PAGES_SET_SELECTED_RUN_IDS: 'PIPELINE_PAGES_SET_SELECTED_RUN_IDS',
  PIPELINE_PAGES_SET_FETCHING: 'PIPELINE_PAGES_SET_FETCHING',
};

const runPagesActionTypes = {
  RUNS_PAGES_SET_FETCHING: 'RUNS_PAGES_SET_FETCHING',
};

const stackPagesActionTypes = {
  STACK_PAGES_SET_SELECTED_RUN_IDS: 'STACK_PAGES_SET_SELECTED_RUN_IDS',
  STACK_PAGES_SET_FETCHING: 'STACK_PAGES_SET_FETCHING',
};
const secretPagesActionTypes = {
  SECRET_PAGES_SET_FETCHING: 'SECRET_PAGES_SET_FETCHING',
};

const stackComponentPagesActionTypes = {
  STACKCOMPONENT_PAGES_SET_SELECTED_RUN_IDS:
    'STACKCOMPONENT_PAGES_SET_SELECTED_RUN_IDS',
  STACKCOMPONENT_PAGES_SET_FETCHING: 'STACKCOMPONENT_PAGES_SET_FETCHING',
};
const flavorPagesActionTypes = {
  STACKCOMPONENT_PAGES_SET_SELECTED_RUN_IDS:
    'STACKCOMPONENT_PAGES_SET_SELECTED_RUN_IDS',
  FLAVOR_PAGES_SET_FETCHING: 'FLAVOR_PAGES_SET_FETCHING',
};

export const actionTypes = {
  SHOW_TOASTER: 'SHOW_TOASTER',
  ...sessionActionTypes,
  ...hubAuthActionTypes,
  ...userActionTypes,
  ...organizationActionTypes,
  ...WorkspaceActionTypes,
  ...pipelineActionTypes,
  ...stackActionTypes,
  ...secretActionTypes,
  ...connectorActionTypes,
  ...secretPagesActionTypes,
  ...runActionTypes,
  ...runPagesActionTypes,
  ...rolesActionTypes,
  ...repositoryActionTypes,
  ...pipelinePagesActionTypes,
  ...stackPagesActionTypes,
  ...stackComponentPagesActionTypes,
  ...stackComponentActionTypes,
  ...flavorActionTypes,
  ...flavorPagesActionTypes,
  ...repositoryPagesActionTypes,
  ...serverInfoActionTypes,
};

export const REQUESTED = 'REQUESTED';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
