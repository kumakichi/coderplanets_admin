export const ERR = {
  CRAPHQL: 'CRAPHQL',
  PARSE_CHEATSHEET_MD: 'PARSE_CHEATSHEET_MD',
  NETWORK: 'NETWORK',
  NOT_FOUND: 'NOT_FOUND',
  TIMEOUT: 'TIMEOUT',
}

export const EVENT = {
  LOGIN_PANEL: 'LOGIN_PANEL',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  ROUTE_CHANGE: 'ROUTE_CHANGE',
  PREVIEW: 'PREVIEW',
  PREVIEW_CLOSE: 'PREVIEW_CLOSE',
  PREVIEW_CLOSED: 'PREVIEW_CLOSED',
  PREVIEW_POST: 'PREVIEW_POST',
  NAV_EDIT: 'NAV_EDIT',
  NAV_CREATE_POST: 'NAV_CREATE_POST',
  REFRESH_POSTS: 'REFRESH_POSTS',

  // admin
  NAV_CREATE_COMMUNITY: 'NAV_CREATE_COMMUNITY',

  DRAFT_INSERT_SNIPPET: 'DRAFT_INSERT_SNIPPET',
}

export const TYPE = {
  APP_HEADER_ID: 'APP_HEADER_ID',

  CHEATSHEET_ROOT_PAGE: 'CHEATSHEET_ROOT_PAGE',
  COMMUNITIES_ROOT_PAGE: 'COMMUNITIES_ROOT_PAGE',
  COMMUNITY_PAGE: 'COMMUNITY_PAGE',
  POST_PAGE: 'POST_PAGE',
  ACTIVITIES_ROOT_PAGE: 'ACTIVITIES_ROOT_PAGE',

  POST: 'POST',
  JOB: 'JOB',
  FAVORITE: 'FAVORITE',
  STAR: 'STAR',
  WATCH: 'WATCH',
  REACTION: 'reaction',
  UNDO_REACTION: 'undoReaction',
  POST_PREVIEW_VIEW: 'POST_PREVIEW_VIEW',
  PREVIEW_ACCOUNT_VIEW: 'PREVIEW_ACCOUNT_VIEW',
  PREVIEW_ACCOUNT_EDIT: 'PREVIEW_ACCOUNT_EDIT',
  PREVIEW_ROOT_STORE: 'PREVIEW_ROOT_STORE',
  PREVIEW_CREATE_POST: 'PREVIEW_CREATE_POST',

  // admin
  PREVIEW_CREATE_COMMUNITY: 'PREVIEW_CREATE_COMMUNITY',

  // PAGE STATE
  LOADING: 'LOADING',
  NOT_FOUND: 'NOT_FOUND',
  RESULT: 'RESULT',
  // filters
  ASC_INSERTED: 'ASC_INSERTED',
  DESC_INSERTED: 'DESC_INSERTED',
  MOST_LIKES: 'MOST_LIKES',
  MOST_DISLIKES: 'MOST_DISLIKES',
}

export const ROUTE = {
  // NOTE: use lower case for god sake
  // the fake id for all communities, this item do not has a id, so make a fake one
  // id is used for UI when item is active
  COMMUNITIES_ID: 'communities',
  // communities CURD
  COMMUNITIES: 'communities',
  // communities categories CURD
  CATEGORIES: 'categories',

  COMMUNITY: 'community',

  USERS_ID: 'users_id',
  // valid part
  POSTS: 'posts',
  JOBS: 'jobs',
  ACTIVITIES: 'activities',
  CHEATSHEETS: 'cheatsheets',
  EDITORS: 'editors',
  THREADS: 'threads',
  TAGS: 'tags',
  SUBSCRIBERS: 'subscribers',

  // users
  // register users
  REGISTERS: 'registers',
  // mother and fathers
  PAYS: 'pays',
  // users passport CURD
  PASSPORTS: 'passports',
  // roles CURD (based on passports)
  ROLES: 'roles',
}
