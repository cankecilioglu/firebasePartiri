import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { WalletConnectModal } from "@walletconnect/modal-react-native";
import "@walletconnect/react-native-compat"; // WalletConnect için uyumluluk

const projectId = "eb6afd215c38ba24b1835e6ad280b416"; // WalletConnect projenizin kimliği

const providerMetadata = {
  name: "Partiri",
  description: "Blockchain tabanlı uygulama",
  url: "https://partiri.com/",
  icons: ["https://yourapp.com/logo.png"], // Projenizin logosu
  redirect: {
    native: "partiri",
    universal: "https://example.com",
  },
};

export default function RootLayout() {
  return (
    <>
      {/* Diğer layout veya navigasyon kodlarınız */}
      <Stack />
      {/* WalletConnect Modal bileşeni */}
      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </>
  );
}
