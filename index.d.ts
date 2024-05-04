export type BaseType = {
  createdAt: Date;
  updatedAt: Date;
}

export type TAuths = {
  code: string,
  description: string
}

export type TUsers = {
  id: string,
  userId: string,
  userPw: string,
  userName: string,
  auths: TAuths[],
  isCertified: boolean
}

export interface IUsers {
  id: string;
  userId: string;
  userPw: string;
  userName: string;
  auths: TAuths[],
  isCertified: boolean;
}

export type TTokenPayload = {
  id: string,
  auths: string[],
  type: "ACCESS" | "REFRESH",
  iat?: number,
  exp?: number
}

export type TToken = { type: string } & TTokenPayload
export type TBasicToken = { type: string, userId: string, userPw: string }

export type PageInfo = { current: number, last: number, total: number, take: number }
export type Page<T> = { data: T[], info: PageInfo }

export type SsshError = {
  message: string,
  statusCode: number,
  error: string
}

export type TWork = {
  userUuid: string;
  user: TUsers;
  baseDate: string;
  workDetail: string;
  offTime: Date;
}

export interface IWork {
  userUuid: string;
  user: TUsers;
  baseDate: string;
  workDetail: string;
  offTime: Date;
}

export type TAlarms = {
  id?: number;
  order: number;
  name: string;
  icon: string;
  title: string;
  contents: string;
  auths: TAuths[];
  path?: string;
  highlightWord?: string;
}

export interface IAlarms {
  id: number;
  order: number;
  name: string;
  icon: string;
  title: string;
  contents: string;
  path?: string;
  auths: TAuths[];
}

export type TMenu = {
  id?: number;
  name: string;
  icon?: number;
  link?: string;
  parentId?: number;
  order: number;
  auths?: TAuths[];
  childMenus?: TMenu[];
}

export type IMenu = {
  id: number;
  name: string;
  icon?: number;
  link?: string;
  parentId?: number;
  order: number;
  auths: TAuths[];
  childMenus?: TMenu[];
}

/**
 * Blog Types
 */


/** Topic Start */
export interface ITopic {
  id: number;
  name: string;
  series?: ISeries[];
  posts?: IPost[];
}

export type TTopic = Pick<ITopic, "id" | "name" | "series" | "posts"> & BaseType

export type TopicItem = Pick<TTopic, "id" | "name"> & {
  seriesCnt: number;
  postsCnt: number;
}
export type TopicListItem = Pick<TTopic, "id" | "name" | "createdAt">;
export type CreateTopicDto = {
  name: string
}


/** Series Start */
export interface ISeries {
  id: number;
  name: string;
  topic: TTopic;
  posts?: IPost[];
}
export type TSeries =
  Pick<ISeries, "id" | "name" | "posts">
  & BaseType
  & { topic: TopicListItem }

export type SeriseItem = Pick<TSeries, "id" | "name" | "topic" | "createdAt"> & {
  postsCnt: number;
}
export type SeriseListItem = Pick<TSeries, "id" | "name" | "createdAt"> & {
  topic: { name: string };
  postsCnt: number;
}
export type CreateSeriesDto = Pick<TSeries, "name"> & {
  topicId: number;
}


/** Post Start */
export interface IPost {
  id: number;
  title: string;
  contents: string;
  topic: TTopic;
  series?: TSeries;
  author: TUsers;
}
export type TPost =
  Pick<IPost, "id" | "title" | "contents" | "topic" | "series" | "author">
  & BaseType;

export type PostItem = Pick<TPost, "id" | "title" | "contents" | "createdAt"> & {
  author: Pick<TUsers, "userName">;
  series?: Pick<TSeries, "id" | "name">;
  topic: Pick<TTopic, "id" | "name">;
}
export type PostListItem = PostItem;
export type CreatePostItem = Pick<TPost, "title" | "contents"> & {
  topicId: number;
  seriesId?: number;
}
export type UpdatePostItem = CreatePostItem & { id: number };
