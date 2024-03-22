import React, { createContext, useContext, useState } from "react";
import { User } from "./types/user";

interface UserContextInterface {
  user?: User;
  updateUser: (userData: User) => void;
}

// Creating User Context using "createContext" from react
const UserContext = createContext<UserContextInterface>({
  user: undefined,
  updateUser: () => {},
});

// Creating a custom hook to access the user context using "useContext" from react
export const useUser = () => useContext(UserContext);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  const updateUser = (userData: User) => setUser(userData);

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
