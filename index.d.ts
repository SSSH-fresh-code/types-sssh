export enum USER_ROLE_ENUM {
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
  userRole: USER_ROLE_ENUM
}

interface IUsers {
  id: string;
  userId: string;
  userPw: string;
  userName: string;
  userRole: USER_ROLE_ENUM
  ;
}