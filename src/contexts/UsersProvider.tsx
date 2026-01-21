import { ReactNode, useState } from "react";
import { UsersContext, User } from "./UsersContext";

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      nombre: "Juan Pérez",
      correo: "juan@example.com",
      rol: "administrador",
      fechaCreacion: "2025-01-15",
    },
    {
      id: "2",
      nombre: "María García",
      correo: "maria@example.com",
      rol: "estandar",
      fechaCreacion: "2025-01-20",
    },
    {
      id: "3",
      nombre: "Carlos López",
      correo: "carlos@example.com",
      rol: "estandar",
      fechaCreacion: "2025-01-18",
    },
  ]);

  const addUser = (user: User) => {
    setUsers([...users, user]);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser: User) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <UsersContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {children}
    </UsersContext.Provider>
  );
};
