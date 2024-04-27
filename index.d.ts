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
  parentsId?: number;
  order: number;
  auths?: TAuths[];
  childMenus?: TMenu[];
}

export type IMenu = {
  id: number;
  name: string;
  icon?: number;
  link?: string;
  parentsId?: number;
  order: number;
  auths: TAuths[];
  childMenus?: TMenu[];
}
