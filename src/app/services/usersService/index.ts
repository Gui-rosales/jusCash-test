import { User } from '../../entities/User';

export interface CreateUserParams extends User {
  passwordConfirmation?: string;
}

export function createUserFn(data: CreateUserParams) {
  const existingUsers: User[] = JSON.parse(
    localStorage.getItem('users') as string
  );
  if (!existingUsers) {
    const tempArray: User[] = [];
    tempArray.push(data);
    return localStorage.setItem('users', JSON.stringify(tempArray));
  }
  existingUsers.push(data);
  return localStorage.setItem('users', JSON.stringify(existingUsers));
}

export function getUsersFn() {
  const existingUsers: User[] = JSON.parse(
    localStorage.getItem('users') as string
  );
  if (!existingUsers) {
    return null;
  }
  return existingUsers;
}
