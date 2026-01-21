import { createContext } from "react";

export interface User {
  id: string;
  nombre: string;
  correo: string;
  rol: "administrador" | "estandar";
  fechaCreacion: string;
}

export interface UsersContextType {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (id: string) => void;
  updateUser: (user: User) => void;
}

export const UsersContext = createContext<UsersContextType | undefined>(
  undefined
);
