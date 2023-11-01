import { useEffect, useState } from 'react';
import { getUsersFn } from '../../../app/services/usersService';
import { User } from '../../../app/entities/User';

export function useHomeController() {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const createdUsers = getUsersFn();
    setUsers(createdUsers);
  }, []);

  return { users };
}
