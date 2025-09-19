"use client";

import * as React from "react";
import { Auth } from "@/components/ui/auth-form-1";

export default function DemoAuth() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen p-4 bg-background">
      <Auth />
    </div>
  );
}
