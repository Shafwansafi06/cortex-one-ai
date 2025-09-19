import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";

export default function AuthGuard({ children }: { children: JSX.Element }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/auth" replace />;
  return children;
}
