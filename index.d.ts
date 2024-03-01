export type TUserRole = "GUEST" | "USER" | "MANAGER" | "ADMIN"

export type TUsers = {
  id: string,
  userId: string,
  userPw: string,
  userName: string,
  userRole: TUserRole
}

export interface IUsers {
  id: string;
  userId: string;
  userPw: string;
  userName: string;
  userRole: TUserRole;
}

export type TTokenPayload = {
  id: string,
  userRole: TUserRole,
  type: string,
  iat?: number,
  exp?: number
}

export type TToken = { type: string } & TTokenPayload
export type TBasicToken = { type: string, userId: string, userPw: string } 