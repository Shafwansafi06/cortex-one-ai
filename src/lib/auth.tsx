import * as React from "react";
import { useNavigate } from "react-router-dom";

type User = { id: string; email: string } | null;

interface AuthContextValue {
  user: User;
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
}

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User>(() => {
    try {
      const raw = localStorage.getItem("cortexone_user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  const signin = React.useCallback(async (email: string, password: string) => {
    // Replace with real API call. For now, accept any password >= 8 and return a fake user.
    if (password.length < 8) return false;
    const fakeUser = { id: "user_1", email };
    setUser(fakeUser);
    localStorage.setItem("cortexone_user", JSON.stringify(fakeUser));
    return true;
  }, []);

  const signout = React.useCallback(() => {
    setUser(null);
    localStorage.removeItem("cortexone_user");
  }, []);

  const value = React.useMemo(() => ({ user, signin, signout }), [user, signin, signout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
