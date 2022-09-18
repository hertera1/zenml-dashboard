const sessionActionTypes = {
  LOGOUT: 'LOGOUT',
  ACCOUNT_LOGIN: 'ACCOUNT_LOGIN',
  ACCOUNT_SIGNUP: 'ACCOUNT_SIGNUP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
};

const userActionTypes = {
  USERS_GET_MY_USER: 'USERS_GET_MY_USER',
  USERS_GET_USER_FOR_ID: 'USERS_GET_USER_FOR_ID',
  UPDATE_USER_EMAIL: 'UPDATE_USER_EMAIL'
};

const organizationActionTypes = {
  ORGANIZATIONS_GET_MY_ORGANIZATION: 'ORGANIZATIONS_GET_MY_ORGANIZATION',
  ORGANIZATIONS_GET_INVITE_FOR_CODE: 'ORGANIZATIONS_GET_INVITE_FOR_CODE',
  ORGANIZATIONS_GET_INVITES: 'ORGANIZATIONS_GET_INVITES',
  ORGANIZATIONS_GET_OWNER: 'ORGANIZATIONS_GET_OWNER',
  ORGANIZATIONS_GET_MEMBERS: 'ORGANIZATIONS_GET_MEMBERS',
  ORGANIZATIONS_GET_ROLES: 'ORGANIZATIONS_GET_ROLES',
  ORGANIZATIONS_INVITE: 'ORGANIZATIONS_INVITE',
  ORGANIZATIONS_DELETE_INVITE: 'ORGANIZATIONS_DELETE_INVITE',
  ORGANIZATIONS_GET_INVOICES: 'ORGANIZATIONS_GET_INVOICES',
  ORGANIZATIONS_RETRY_INVOICE: 'ORGANIZATIONS_RETRY_INVOICE',
};

const workspaceActionTypes = {
  WORKSPACES_GET_MY_WORKSPACES: 'WORKSPACES_GET_MY_WORKSPACES',
  WORKSPACES_GET_PIPELINES_FOR_WORKSPACE_ID:
    'WORKSPACES_GET_PIPELINES_FOR_WORKSPACE_ID',
};

const pipelineActionTypes = {
  PIPELINES_GET_MY_PIPELINES: 'PIPELINES_GET_MY_PIPELINES',
  PIPELINES_GET_PIPELINE_FOR_ID: 'PIPELINES_GET_PIPELINE_FOR_ID',
};

const runActionTypes = {
  RUNS_GET_RUN_FOR_ID: 'RUNS_GET_RUN_FOR_ID',
};

const billingActionTypes = {
  BILLING_GET_BILLING_FOR_RUN_ID: 'BILLING_GET_BILLING_FOR_RUN_ID',
  BILLING_GET_ORGANIZATION_BILLING: 'BILLING_GET_ORGANIZATION_BILLING',
};

const stripeActionTypes = {
  STRIPE_GET_PORTAL_URL: 'STRIPE_GET_PORTAL_URL',
  STRIPE_GET_PAYMENT_METHOD: 'STRIPE_GET_PAYMENT_METHOD',
  STRIPE_UPDATE_PAYMENT_METHOD: 'STRIPE_UPDATE_PAYMENT_METHOD',
  STRIPE_GET_SUBSCRIPTION: 'STRIPE_GET_SUBSCRIPTION',
  STRIPE_UPDATE_SUBSCRIPTION: 'STRIPE_UPDATE_SUBSCRIPTION',
};

const pipelinePagesActionTypes = {
  PIPELINE_PAGES_SET_CURRENT_WORKSPACE: 'PIPELINE_PAGES_SET_CURRENT_WORKSPACE',
  PIPELINE_PAGES_SET_SELECTED_RUN_IDS: 'PIPELINE_PAGES_SET_SELECTED_RUN_IDS',
  PIPELINE_PAGES_SET_FETCHING: 'PIPELINE_PAGES_SET_FETCHING',
};

const workspacePagesActionTypes = {
  WORKSPACE_PAGES_SET_FETCHING: 'WORKSPACE_PAGES_SET_FETCHING',
};

export const actionTypes = {
  SHOW_TOASTER: 'SHOW_TOASTER',
  ...sessionActionTypes,
  ...userActionTypes,
  ...organizationActionTypes,
  ...workspaceActionTypes,
  ...pipelineActionTypes,
  ...runActionTypes,
  ...billingActionTypes,
  ...pipelinePagesActionTypes,
  ...stripeActionTypes,
  ...workspacePagesActionTypes,
};

export const REQUESTED = 'REQUESTED';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
