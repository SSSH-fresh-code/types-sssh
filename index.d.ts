export enum USER_AUTH_ENUM {
  GUEST,
  USER,
  MANAGER,
  ADMIN
}

type TUsers = {
  id: string,
  userId: string,
  userPw: string,
  userName: string,
  userAuth: USER_AUTH_ENUM
}

interface IUsers {
  id: string;
  userId: string;
  userPw: string;
  userName: string;
  userAuth: USER_AUTH_ENUM;
}