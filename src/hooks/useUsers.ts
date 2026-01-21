import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (context === undefined) {
    throw new Error("useUsers debe ser usado dentro de UsersProvider");
  }
  return context;
};
