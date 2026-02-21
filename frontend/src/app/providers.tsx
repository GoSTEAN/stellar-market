"use client";

import { WalletProvider } from "@/context/WalletContext";
import { SocketProvider } from "@/context/SocketContext";
import { AuthProvider } from "@/context/AuthContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      <AuthProvider>
        <SocketProvider>{children}</SocketProvider>
      </AuthProvider>
    </WalletProvider>
  );
}
