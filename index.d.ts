import { USER_ROLE_ENUM } from "./index.ts";

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