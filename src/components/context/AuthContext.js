import { BASE_URL, SECRETE_TOKEN } from "@/lib/global";
import { useUserQuery } from "@/redux/features/user/userApi";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { data, refetch, isLoading } = useUserQuery();
  const [user, setUser] = useState(null);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  const logout = async () => {
    localStorage.removeItem(SECRETE_TOKEN);
    setUser(null);
    refetch();
  };

  const contextValue = {
    user,
    setUser,
    refetch,
    isLoading,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
