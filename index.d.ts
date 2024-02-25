export type TUserRole = "GUEST" | "USER" | "MANAGER" | "ADMIN"

export type TUsers = {
  id: string,
  userId: string,
  userPw: string,
  userName: string,
  userRole: USER_ROLE_ENUM
}

export interface IUsers {
  id: string;
  userId: string;
  userPw: string;
  userName: string;
  userRole: USER_ROLE_ENUM
  ;
}